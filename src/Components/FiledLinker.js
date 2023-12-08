import React, { useState } from "react";
import "./common.css";

const columnsInFiles = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "role",
  "Birthday",
  "Adress",
  "[Main-stats][Global-sales-stats][European-region][France]",
  "City",
];

const availableFields = [
  "Company",
  "jobTitle",
  "adress",
  "adress(2)",
  "adress(3)",
  "first_name",
  "last_name",
  "email_adress",
  "Phone number",
  "Pourcentage of france in the global market",
];

const FieldsLinker = () => {
  const [selectedCF, setSelectedCF] = useState("");
  const [linkedFieldsList, setLnkedFieldsList] = useState([]);

  const onFieldlink = (val) => {
    if (selectedCF) {
      setLnkedFieldsList([
        ...linkedFieldsList,
        {
          columnsInField: selectedCF,
          availableField: val,
        },
      ]);
      setSelectedCF('');
    } else {
      alert("Please select columns filed first");
    }
  };

  return (
    <div>
      <h2>FieldsLinker</h2>
      <div className="fields">
        <div className="column-fields">
          <h3>Columns in files</h3>
          <div>
            {columnsInFiles.map((val) => {
              return (
                <div
                  className={
                    val === selectedCF
                      ? "selectedDragableContent"
                      : "dragableContent"
                  }
                  onClick={() => setSelectedCF(val)}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="available-fields">
          <h3>Available Fields</h3>
          <div>
            {availableFields.map((val) => {
              return (
                <div
                  className="dragableContent"
                  onClick={() => onFieldlink(val)}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="linkedFields">
        <h3>Linked Fields</h3>
        {linkedFieldsList.map((val) => {
          return (
            <div>
              {val.columnsInField} - {val.availableField}
            </div>
          );
        })}
      </div>
      <button type="button" class="fieldLinkerSave">
        Save links
      </button>
    </div>
  );
};

export default FieldsLinker;
