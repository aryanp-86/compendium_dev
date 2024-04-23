import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function DialogBox(props) {
  const { prevname, prevphoto, prevcontent, prevtitle } = props.prevdata;
  const [name, setName] = useState(prevname);
  const [photo, setPhoto] = useState(null);
  const [content, setContent] = useState(prevcontent);
  const [title, setTitle] = useState(prevtitle);
  const cancelButtonRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("_id", props.currId);
      formData.append("name", name);
      formData.append("photo", photo);
      formData.append("content", content);
      formData.append("title", title);
      const resUserEdited = await fetch("api/admin1", {
        method: "POST",

        body: formData,
      });
      if (resUserEdited.status == 200) {
        props.setKey((currentValue) => currentValue + 1);
        toast.success("Edited Successfully!", {
          position: "top-center",
        });
        props.setOpen(false);
        console.log(resUserEdited.status);
      }
    } catch (error) {
      console.log("Error during deleting: ", error);
    }
  };
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Edit article
                      </Dialog.Title>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 z-50 min-w-3xl"
                      >
                        <label
                          htmlFor="UserEmail"
                          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                          <span className="text-sm poppins-font font-bold text-white">
                            {" "}
                            Name{" "}
                          </span>

                          <input
                            type="text"
                            id="UserName"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter full name"
                            className="mt-2 w-full text-gray-400 border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          />
                        </label>
                        <label
                          htmlFor="UserTitle"
                          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                          <span className="text-sm poppins-font font-bold text-white">
                            {" "}
                            Title
                          </span>

                          <input
                            type="text"
                            id="UserTitle"
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="aryan@vit.edu(Only vit.edu mails)"
                            className="mt-2 w-full border-none bg-transparent p-0 focus:border-transparent text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                          />
                        </label>
                        <label
                          htmlFor="UserContent"
                          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                          <span className="text-sm poppins-font font-bold text-white">
                            {" "}
                            Content{" "}
                          </span>

                          <input
                            type="text"
                            id="UserContent"
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter article content"
                            className="mt-2 w-full text-gray-400 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-transparent"
                          />
                        </label>
                        <label
                          htmlFor="UserPhoto"
                          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                          <span className="text-sm poppins-font font-bold text-white">
                            {" "}
                            Photo{" "}
                          </span>
                          {/* <ImageAccept setPhoto={setPhoto} photo={photo} /> */}
                          <input
                            type="file"
                            id="myFile"
                            name="filename"
                            onChange={(e) => setPhoto(e.target.files[0])}
                          />
                          {/* <input
                            type="text"
                            id="UserPhoto"
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Enter valid url"
                            className="mt-2 w-full text-gray-400 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-transparent"
                          /> */}
                        </label>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => props.setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
