import React from "react"
import Header from "../components/Header";
import AdminAddPoject from "../components/Admin/AdminAddProject"
import AdminProjectList from "../components/Admin/adminProjectList";

const adminAddPoject = () => {
  return (
    <div>
      <Header />
      <AdminAddPoject />
      <AdminProjectList />
    </div>
  )
}

export default adminAddPoject