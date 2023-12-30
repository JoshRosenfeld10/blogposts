import { useState, FormEvent } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import { AppDispatch } from "../../reducers/store";

export interface PostData {
  author: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

function Form() {
  const [postData, setPostData] = useState({
    author: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const handleClear = () => {};

  return (
    <div className=" w-fit shadow-md rounded-lg p-5">
      <form
        className="flex flex-col justify-center items-center gap-2"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-lg cursor-default">Create a Post</h1>
        <input
          type="text"
          value={postData.author}
          placeholder="Author"
          className="w-11/12 p-2 border-gray-300 border border-1 rounded-md text-sm"
          onChange={(e) => setPostData({ ...postData, author: e.target.value })}
        ></input>
        <input
          type="text"
          value={postData.title}
          placeholder="Title"
          className="w-11/12 p-2 border-gray-300 border border-1 rounded-md text-sm"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></input>
        <input
          type="text"
          value={postData.message}
          placeholder="Message"
          className="w-11/12 p-2 border-gray-300 border border-1 rounded-md text-sm"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={postData.tags}
          placeholder="Tags"
          className="w-11/12 p-2 border-gray-300 border border-1 rounded-md text-sm"
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></input>
        <div className=" text-xs flex justify-center w-11/12">
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64: string) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white w-full rounded-md p-2 text-sm transition-all ease-linear duration-100"
          type="submit"
        >
          POST
        </button>
        <button
          className=" bg-red-500 hover:bg-red-600 text-white w-full rounded-md p-2 text-xs transition-all ease-linear duration-100"
          onClick={handleClear}
        >
          CLEAR
        </button>
      </form>
    </div>
  );
}

export default Form;
