import { ID } from "appwrite";
import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCared({ $id, title, featuredImg }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div>
          <img
            src={appwriteService.getFilePreview(featuredImg)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCared;
