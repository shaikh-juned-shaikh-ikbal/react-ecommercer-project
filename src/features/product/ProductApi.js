// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    //TODO: we will not hard code server URL here
  const response = await response.json("http://localhost:8080/products")
  const data = await response.json()
  resolve({data})
  }
  );
}
 