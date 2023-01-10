import React, { forwardRef, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import '../styles/lister.css';
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

function Lister() {

  const [Annonce, setAnnonce] = useState();
  const history = useHistory();
  const { loc } = useParams();
  const { prix } = useParams();

  useEffect(() => {
    Axios.post("http://localhost:3001/afficheannonce", { loc: loc , prix : prix }).then((response) => {
      setAnnonce(response.data);
    });
  }, []);
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Details: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const actions = [
    {
      icon: BookOnlineIcon,
      tooltip: "Book now",
      position: "row",
      onClick: (event, rowData) => {
        history.push({
          pathname: "/Book",
          Student: rowData
        })
      },
    },
  ];

  return (
    <div style={{ alignItems: "center" }}>
      <MaterialTable style={{ width: "100%", }}
        icons={tableIcons}
        title="Announcements"
        columns={[
          { title: "ID Announcement", field: "id_annonce" },
          { title: "Property type", field: "property" },
          { title: "Location", field: "location" },
          { title: "Price(MAD)", field: "price", },
          { title: "Description", field: "description", },
        ]}
        data={Annonce}
        actions={actions}
        options={{
          actionsColumnIndex: -1,
          //selection: true,
        }}

      />
    </div>
  );
}

export default Lister;