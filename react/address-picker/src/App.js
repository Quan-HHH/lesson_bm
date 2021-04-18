import React, {useState} from 'react'
import {Select, Input} from 'antd'
import provincesAndLocations from './ChinaMap/provinceAndLocation'

const {Option} = Select
function App() {
  const [firstLevelOptions, setFirstLevelOptions] = useState(provincesAndLocations)
  const [secondLevelOptions, setSecondLevelOptions] = useState([])
  const [firstLevelSelected, setFirstLevelSelected] = useState()
  const [secondLevelSelected, setSecondLevelSelected] = useState()
  const [isProvinceLevelCityOrSpeicalLocation, setIsProvinceLevelCityOrSpeicalLocation] = useState(false)

  const 

  const handleFirstLevelChange = (firstLevelOption) => {
    if(firstLevelOptions === firstLevelSelected) {
      return
    }
    setSecondLevelOptions()
  }
  return (
    <div className="App">
      <Select
        placeholder='请选择省份或地区'
        onChange={handleFirstLevelChange}
      >
        {
          firstLevelOptions.map((item, i) => <Option key={i}>{item}</Option>)
        }
      </Select>
      <Select>
        {
          secondLevelOptions.map((item, i) => <Option key={i}>{item}</Option>)
        }
      </Select>
      <Input />
    </div>
  );
}

export default App;
