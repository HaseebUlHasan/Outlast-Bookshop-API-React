import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import NextPage from '@material-ui/icons/ChevronRight';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { useNavigate } from 'react-router-dom';

const tableIcons = {
    SaveAlt: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
     
  };



function Container() {
 const navigate = useNavigate();
  const [data, setData] = useState([])
  const columns = [
    { title: "Book ID", field: "id" },
    { title: "Book Title", field: "title", align:"left" },
    { title: "Media Type", field: "media_type",filtering: false },
    { title: "Download Count", field: "download_count",filtering: false, align:"left" },
    { title: "Copyright", field: "copyright", align:"left" },

  ]

  const Fetch = () => {
    fetch("https://gutendex.com/books?id")
    .then(res => res.json())
    .then(data => { setData(data.results)
      console.log(data.results[0],"jbhbh")
    })
   }

  useEffect(() => {
    Fetch();
  }, [])
 
  return (
    <div>
     
      <MaterialTable style={{width:"90%", margin:"10px", marginLeft:"70px"}}
      icons={tableIcons}
        title="Books"
      
        actions={[
          {
            icon: NextPage,
            tooltip: 'User Detail',
            onClick: (event, rowData) => navigate (`/BookDetail/${rowData.id}`)
           
          }
        ]}
        options={{
          filtering: true,
          headerStyle :{background:"#3486eb" , color :"white"},
          actionsColumnIndex: -1,
          exportButton:true,
          search: true,
          sorting: true
        }}
        data={data}
        columns={columns}
        
      />
    </div>
  );
}

export default Container;