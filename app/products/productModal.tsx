"use client";

import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

export default function ProductModal() {
  const [openModal, setOpenModal] = useState(false);
  const [payload, setPayload] = useState({
    userId: "",
    title: "",
    completed: "",
  });
  const router  = useRouter()
  function handleChange() {
    setOpenModal(!openModal);
  }
  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload,
      }),
    });
    setPayload({
      userId: "",
      title: "",
      completed: "",
    });
    router.refresh()
    setOpenModal(false)
  }
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Add New Product
      </button>
      <input
        type="checkbox"
        onClick={handleChange}
        checked={openModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">User Id</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="UserId"
                value={payload.userId}
                onChange={(e) =>
                  setPayload({ ...payload, userId: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Title"
                value={payload.title}
                onChange={(e) =>
                  setPayload({ ...payload, title: e.target.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Completed</label>
              <input
                type="text"
                className="input w-full input-bordered"
                placeholder="Completed"
                value={payload.completed}
                onChange={(e) =>
                  setPayload({ ...payload, completed: e.target.value })
                }
              />
            </div>
            <div className="modal-action">
              <button type="button" onClick={handleChange} className="btn">
                Close
              </button>
              <button
                type="submit"
                onClick={handleChange}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
