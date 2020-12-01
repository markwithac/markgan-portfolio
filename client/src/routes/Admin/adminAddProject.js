import React from "react"
import AdminAddPoject from "../../components/Admin/AdminAddProject"
import AdminProjectList from "../../components/Admin/adminProjectList";

const adminAddPoject = () => {
  return (
    <div className="content-wrap">
      <AdminAddPoject />
      <AdminProjectList />
    </div>
  )
}

export default adminAddPoject