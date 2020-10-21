import React from "react"
import Header from "../components/Header";
import AdminAddPoject from "../components/AdminAddProject"
import AdminProjectList from "../components/adminProjectList";

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