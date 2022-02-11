import React from 'react';
import SearchComponent from './components/SearchComponent';

const Dictionary = () => {
  return (
    <div style={{ padding:'0px' }}>
      <SearchComponent />
      <div style={{ width:'100%', height:'50px', backgroundColor:'#e76f51', marginTop:'30px', display:'flex', justifyContent: 'space-evenly' }}>
        <div style={{ width:'70px', height:'30px', backgroundColor:'white', textAlign:'center', marginTop:'10px', padding:'5px' }}>
          Mango
        </div>
        <div style={{ width:'70px', height:'30px', backgroundColor:'white', textAlign:'center', marginTop:'10px', padding:'5px'  }}>
          Food
        </div>
        <div style={{ width:'70px', height:'30px', backgroundColor:'white', textAlign:'center', marginTop:'10px', padding:'5px'  }}>
          Food
        </div>
        <div style={{ width:'70px', height:'30px', backgroundColor:'white', textAlign:'center', marginTop:'10px', padding:'5px'  }}>
          Foodfsbhshbsd
        </div>
        <div style={{ width:'70px', height:'30px', backgroundColor:'white', textAlign:'center', marginTop:'10px', padding:'5px'  }}>
          Food
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
