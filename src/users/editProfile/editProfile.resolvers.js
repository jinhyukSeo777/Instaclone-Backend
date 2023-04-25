import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { protectedResolver } from "../users.utils";
import { createWriteStream } from "fs";
import { uploadToS3 } from "../../shared/shared.utils";

const resolvers = {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { firstName, lastName, username, email, password, bio, avatar },
        { loggedInUser }
      ) => {
        let avatarUrl = null;
        if (avatar) {
          avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatars");
          // const filename = `${Date.now()}-${avatar.file.filename}`;
          // const stream = avatar.file.createReadStream();
          // const out = createWriteStream(process.cwd() + "/uploads/" + filename);
          // stream.pipe(out);
          // avatarUrl = `http://localhost:4000/static/${filename}`;
        }

        let hashedPassword = null;
        if (password) {
          hashedPassword = await bcrypt.hash(password, 10);
        }

        const updatedUser = await client.user.update({
          where: { id: loggedInUser.id },
          data: {
            firstName,
            lastName,
            username,
            email,
            ...(hashedPassword && { password: hashedPassword }),
            bio,
            ...(avatarUrl && { avatar: avatarUrl }),
          },
        });
        if (updatedUser) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "update fail",
          };
        }
      }
    ),
  },
};

export default resolvers;
