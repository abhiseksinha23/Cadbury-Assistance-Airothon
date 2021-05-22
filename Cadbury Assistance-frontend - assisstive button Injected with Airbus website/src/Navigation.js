import React,{ useState,useEffect } from "react";
import MaterialTable from 'material-table';
import axios from 'axios';
export default function NavigationHelper() {

    const [navigationDetails, setNavigationDetails] = useState([]);
    const fetchNavigationDetails = () => {
      return axios.get(`https://application-imp.herokuapp.com/details`)
            .then(res => {setNavigationDetails(res.data.data)})
            .catch(err => {console.error(err)})    
    }

    useEffect (() => {
      fetchNavigationDetails();
    },[])

    return (
      <div>
      {navigationDetails.length > 0 ?
        <MaterialTable
          title="Navigation Helper"
          columns={[
            { title: 'Topic', field: 'topic',
              cellStyle: {
                  backgroundColor: '#039be5',
                  color: '#FFF',
              },
              headerStyle: {
                  backgroundColor: '#039be5',
              }
          },
            { title: 'Details', field: 'description' },
          ]}
          data={navigationDetails}       
          options={{
            search: true,
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF'
            }
          }}
        /> : "Loading..."
      }
      </div>
    )
  }
  