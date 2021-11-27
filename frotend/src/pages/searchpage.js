import React from 'react';
import background from "../background.jpg";
import Cards from '../components/Cards'
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as Clear } from '../clear.svg';
import axios from 'axios';
import Select from 'react-select';

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  align-items: center;
  background: #F26A2E;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-bottom: 3px solid;
  border-radius: 20px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const TextInput = styled.input`
  flex: 1 0;
  min-width: 500px;
  min-height: 60px;
  background-color: transparent;
  font-size: inherit;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  flex: 0 0;
`;


function SearchPage() {

  const [inputValue, setInputValue] = useState('');
  const [paintings, setPaintings] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:5000/paintings", {"location": inputValue}).then(
          res => {
              setPaintings(res.data)
          }
        )
  },[inputValue])

  useEffect(() => {
    axios.get("http://localhost:5000/locations").then(
          res => {
              let vect = res.data;
              let vect_dict = [];
              for(var i = 0; i < vect.length; i++){
                console.log(vect[i])
                let dict = {
                  label: vect[i],
                  value: vect[i],
                }
                vect_dict.push(dict);
              }

              setLocations(vect_dict);
          }
        )
  }, [])

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
    <div style={{height: '100vh', backgroundImage: `linear-gradient(to bottom, black, transparent),  url(${background})`}}>
    <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
      <div style={{ width: '40vw', paddingTop: '10vh'}}>
      <form method="get" action="#cards">
            <button type="submit">View paintings</button>
        </form>
      <Select
        className="select"
        options={locations}
        onChange={event => {console.log("asd"); setInputValue(event['value'][0]); }}
        MenuProps={MenuProps}
      />
      </div>
    </div>
    </div>
    <div id = "cards">
      <Cards paintings={paintings}/>
    </div>
    </>
  );
}

export default SearchPage;
