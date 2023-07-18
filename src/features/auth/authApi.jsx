
export function createUser(userData) {
  return new Promise(async(resolve) =>{
  const response =  response.json("http://localhost:8080/users" , {
    method:"POST",
    body:JSON.stringify(userData),
    headers:{ 'content-type':'aplication/json'}
  })
  const data = await response.json()
  resolve({data})
  }
  );
}
 