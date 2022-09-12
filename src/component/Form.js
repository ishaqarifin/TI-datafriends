import React, { useState } from "react";

export default function Form() {
  const [inputList, setinputList] = useState(
    [
      { 
        productName: "Product 1", 
        productPrice: '', 
        qty: '',
        total: ""
       }
    ]
    );

    // var z = []
    let result = []
    // let [hasil, setHasil] = useState([{}])
    for (let j = 0; j < inputList.length; j++) {
      var z = parseInt(inputList[j].productPrice)*parseInt(inputList[j].qty)
      result.push(z)
    }
    var jumlahh = 0
    for (var i = 0; i < result.length; i++) {
      jumlahh += result[i]
      
    }
    
    const handleinputchange = (e, index) => {
      const { name, value } = e.target;
      if (e.target.productPrice = '4') {
        console.log('error');
      } else {
        console.log('oke');
      }
      const list = [...inputList];
      list[index][name] = value;
      setinputList(list);
      console.log(name);
      console.log(inputList);
    };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };

  const handleaddclick = () => {
    setinputList([...inputList, { productName: "", productPrice: "", qty: "" }]);
  };
  return (
    <div className="">
      <button className="text-white w-24 m-16 bg-amber-900 active:bg-orange-700 font-bold uppercase text-sm px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" 
      onClick={handleaddclick}>
        Add More
      </button>

      {inputList.map((x, i) => {
        return (
          <div className="flex pt-6 pb-8 p-24 justify-between">
            <div className="flex-col">
              <div className="mb-2">Product Name</div>
              <input 
              name="productName"
              type="" className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
              onChange={(e) => handleinputchange(e, i)} 
              />
            </div>
            <div className="flex-col">
              <div className="mb-2">Product Price</div>
              <input 
              name="productPrice"
              type="" className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
              onChange={(e) => handleinputchange(e, i)} 
              />
            </div>
            <div className="flex-col">
              <div className="mb-2">Qty</div>
              <input 
              name="qty"
              type="" className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
              onChange={(e) => handleinputchange(e, i)} 
              />
            </div>
            <div className="flex-col">
              <div className="mb-2">Total</div>
              <input 
              name="total"
              id="total"
              placeholder=""
              value={parseInt(inputList[i].productPrice)*parseInt(inputList[i].qty)}
              // value={total[i].tot}
              type="" className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" 
              onChange={(e) => handleinputchange(e, i)} 
              />
            </div>

            {/* <div className="form-group col-md-4">
                    <label >First Name</label>
                      <input type="text"  name="firstName" className="form-control"  placeholder="Enter First Name" 
                      onChange={ e=>handleinputchange(e,i)} 
                      />
                  </div>
                  <div className="form-group col-md-4">
                      <label >Last Name</label>
                      <input type="text"  name="lastName" className="form-control"   placeholder="Enter Last Name" 
                      onChange={ e=>handleinputchange(e,i) }
                      />
                  </div> */}

            <div className="mt-4">
              {inputList.length !== 1 && (
                <button className="text-white mt-4 w-24 bg-red-700 active:bg-orange-700 font-bold uppercase text-sm px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" 
                onClick={() => handleremove(i)}>
                  Remove
                </button>
              )}
            </div>
          </div>
        );
      })}

            <div className="flex-col right-10 pl-96 ml-96">
              <div className="mb-2">Grand Total</div>
              <input 
              value={jumlahh} 
              className="shadow bg-amber-100 border-2 border-orange-900 rounded py-2 px-1" />
            </div>

    </div>
  );
}
