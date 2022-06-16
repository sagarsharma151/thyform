import React, { useRef, useEffect,useState } from "react";
import $ from "jquery";
import "./Sideform.scss";
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import { formIoData } from "./consts";
import "./style.scss";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";




// const SideBarForm = ({ openClass,sidebar,setSidebar }) => {
const SideBarForm = (props) => {

  // const handleInputChange = useCallback(event => {
  //   setSidebar(event.target.value)
  // }, [setSidebar])

  const [formData, setFormData] = useState(formIoData);
  // const [selectedSection, setSelectedSection] = useState("reactFormBuilder");
  // const onPost = (d) => setData(d.task_data);
  // const onToggle = () => togglePreview(!preview);
  const printResult = () => {
    // if (selectedSection === "formIo") {

    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
      // console.log(document.getElementById("formio-result"));
    });
    // }
  };
  return (
    // <nav
    //   id="navbarform"
    //   className={props.openClass === "open" ? "opneSidebar" : ""}
    // >
    //   {/* {/ onClick={handleInputChange} /} */}
    //   {/* {/ <div>closed</div> /} */}
    //   <div
    //     id="fb-editor"
    //     ref={fb}
    //     style={{ backgroundColor: props.name.chart }}
    //   />
    // </nav>
    <div>
    <button className="green" onClick={printResult}>
      display result
    </button>

    <FormBuilderIo
      form={formIoData}
      // onChange={schema => setFormData(schema)}
      onSubmit={(data) => {
        console.log(data);
      }}
      saveForm={(data) => setFormData(data)}
      saveText="Save Form"
      onSubmitDone={(data) => console.log(data)}
    />
    <div style={{ display: "none" }}>
      <div id="formio-result" />
    </div>
  </div>
  );
};

export default SideBarForm;
