// script filter result on keyup avec ajax 
function returnDate(date){
let d = new Date();
let d1 = new Date(date);
let sub = Math.floor(Math.abs((d-d1)/(86400000)));
if (sub<=1) return "منذ أقل من يوم";
if (sub===2) return " منذ يومين";
else if(sub >2 && sub<11) return " منذ " + sub +" أيام ";
else return " منذ " + sub +" يوم ";
}
const searchField = document.querySelector(".input-group #search");
const pagCont = document.querySelector(".paginationContainer");
const cardListOutput = document.querySelector(" #card-list-output");
const cardList = document.querySelector(" #card-list");
const cardFilter = document.querySelector(" .boxsOut");
cardListOutput.style.display = "none";
searchField.addEventListener("keyup", (e) => {
  const searchValue = e.target.value;
  cardFilter.innerHTML='';
  console.log(searchValue);
  if (searchValue.trim().length > 0) {
    fetch("/searchPerson", {
      body: JSON.stringify({ searchText: searchValue }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.length);
        cardList.style.display = "none";
        cardListOutput.style.display = "";

        if (data.length === 0) {
          pagCont.style.display = "none";
          cardListOutput.innerHTML = "لا توجد نتائج";
        }
        else{
          data.forEach(element => { cardFilter.innerHTML+=`
          <div class="col-md-6 col-lg-4">
          <div class="card border-danger mb-3" >
            <div class="card-header"> 
            <h4 class="mx-4" id="def">فاعل خير</h4> 
            <img src='https://www.pngarts.com/files/11/Avatar-Transparent-Images.png'id='avatr'/>
            </div>
          <div class="card-body">
            <div class="d-flex justify-content-evenly flex-row-reverse
            align-self-center"><p class="fw-bold  pt-1 w-50 adrs  "> ${element.wilaya} ${element.commun}</p><i class="bi bi-geo-alt-fill  w-50  text-secondary fs-4 mx-auto"></i></div>
            <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50 bloodType "> ${element.bloodType} </p><i class="bi bi-droplet-half text-danger w-50  fs-4 mx-auto"></i></div>
            <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50    ">  ${element.phone}</p><i class="bi bi-telephone-fill text-success  w-50  fs-4 mx-auto"></i></div>

          </div>
          <div class="card-footer d-flex justify-content-evenlyalign-content-center justify-content-between text-muted">
            <p style="margin-block: 1%;">${returnDate(element.pub_date)}  </p>
            <div class="d-grid gap-2">
              <a type="button" href="tel: ${element.phone}" class="btn btn-success text-light text-decoration-none"> إتصال  <i class="bi bi-telephone-outbound-fill px-2"></i></a>
            </div>
          </div>
          </div>
          </div>
            `
              
          });

           
        }
      });
  } else {
      cardListOutput.style.display = "none";
    cardList.style.display = "";
    pagCont.style.display = "";

  }
});

const wilaya = document.querySelector('#sel');
const commun = document.querySelector('#sel1');
const bloodType = document.querySelector('#sel2');

wilaya.addEventListener('change',(e)=>{const WilayaValue = e.target.value;
    cardFilter.innerHTML='';
    console.log(WilayaValue);
    
      fetch("/searchPerson", {
        body: JSON.stringify({ searchText: WilayaValue }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
        var newData = data;
     
          cardList.style.display = "none";
          cardListOutput.style.display = "";
          console.log("data", newData);
  
          if (data.length === 0) {
            pagCont.style.display = "none";
            cardListOutput.innerHTML = "لا توجد نتائج";
          }
          else{
            data.forEach(element => { cardFilter.innerHTML+=`
            <div class="col-md-6 col-lg-4">
            <div class="card border-danger mb-3" >
              <div class="card-header"> 
              <h4 class="mx-4" id="def">فاعل خير</h4> 
              <img src='https://www.pngarts.com/files/11/Avatar-Transparent-Images.png'id='avatr'/>
              </div>
            <div class="card-body">
              <div class="d-flex justify-content-evenly flex-row-reverse
              align-self-center"><p class="fw-bold  pt-1 w-50 adrs  "> ${element.wilaya} ${element.commun}</p><i class="bi bi-geo-alt-fill  w-50  text-secondary fs-4 mx-auto"></i></div>
              <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50 bloodType "> ${element.bloodType} </p><i class="bi bi-droplet-half text-danger w-50  fs-4 mx-auto"></i></div>
              <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50    ">  ${element.phone}</p><i class="bi bi-telephone-fill text-success  w-50  fs-4 mx-auto"></i></div>
  
             </div>
             <div class="card-footer d-flex justify-content-evenlyalign-content-center justify-content-between text-muted">
              <p style="margin-block: 1%;"> ${returnDate(element.pub_date)}  </p>
              <div class="d-grid gap-2">
                <a type="button" href="tel: ${element.phone}" class="btn btn-success text-light text-decoration-none"> إتصال  <i class="bi bi-telephone-outbound-fill px-2"></i></a>
              </div>
            </div>
            </div>
            </div>
              `
                
            });
  
             
          }
          commun.addEventListener('change',(e)=>{const communValue = e.target.value;
            cardFilter.innerHTML='';
            console.log(communValue);
                  cardList.style.display = "none";
                  cardListOutput.style.display = "";
                  console.log("data", newData);
          
                  if (newData.length === 0) {
                    pagCont.style.display = "none";
                    cardListOutput.innerHTML = "لا توجد نتائج";
                  }
                  else{
                    newData.forEach(element => {
                    if (element.commun===communValue) {
                        
                      
                    cardFilter.innerHTML+=`
                    <div class="col-md-6 col-lg-4">
                    <div class="card border-danger mb-3" >
                      <div class="card-header"> 
                      <h4 class="mx-4" id="def">فاعل خير</h4> 
                      <img src='https://www.pngarts.com/files/11/Avatar-Transparent-Images.png'id='avatr'/>
                      </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-evenly flex-row-reverse
                      align-self-center"><p class="fw-bold  pt-1 w-50 adrs  "> ${element.wilaya} ${element.commun}</p><i class="bi bi-geo-alt-fill  w-50  text-secondary fs-4 mx-auto"></i></div>
                      <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50 bloodType "> ${element.bloodType} </p><i class="bi bi-droplet-half text-danger w-50  fs-4 mx-auto"></i></div>
                      <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50    ">  ${element.phone}</p><i class="bi bi-telephone-fill text-success  w-50  fs-4 mx-auto"></i></div>
          
                    </div>
                    <div class="card-footer d-flex justify-content-evenlyalign-content-center justify-content-between text-muted">
                      <p style="margin-block: 1%;"> ${returnDate(element.pub_date)}  </p>
                      <div class="d-grid gap-2">
                        <a type="button" href="tel: ${element.phone}" class="btn btn-success text-light text-decoration-none"> إتصال  <i class="bi bi-telephone-outbound-fill px-2"></i></a>
                      </div>
                    </div>
                    </div>
                    </div>
                      `
                    }   
                    });
          
                     
                  }
              
            
        
        })
        bloodType.addEventListener('change',(e)=>{const bloodTypeValue = e.target.value;
            cardFilter.innerHTML='';
            console.log(bloodTypeValue);
                  cardList.style.display = "none";
                  cardListOutput.style.display = "";
                  console.log("data", newData);
          
                  if (newData.length === 0) {
                    pagCont.style.display = "none";
                    cardListOutput.innerHTML = "لا توجد نتائج";
                  }
                  else{
                    newData.forEach(element => {
                    if (element.bloodType === bloodTypeValue) {
                        
                      
                    cardFilter.innerHTML+=`
                    <div class="col-md-6 col-lg-4">
                    <div class="card border-danger mb-3" >
                      <div class="card-header"> 
                      <h4 class="mx-4" id="def">فاعل خير</h4> 
                      <img src='https://www.pngarts.com/files/11/Avatar-Transparent-Images.png'id='avatr'/>
                      </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-evenly flex-row-reverse
                      align-self-center"><p class="fw-bold  pt-1 w-50 adrs  "> ${element.wilaya} ${element.commun}</p><i class="bi bi-geo-alt-fill  w-50  text-secondary fs-4 mx-auto"></i></div>
                      <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50 bloodType "> ${element.bloodType} </p><i class="bi bi-droplet-half text-danger w-50  fs-4 mx-auto"></i></div>
                      <div class="d-flex justify-content-evenly flex-row-reverse align-self-center"><p class="fw-bold  pt-1 w-50    ">  ${element.phone}</p><i class="bi bi-telephone-fill text-success  w-50  fs-4 mx-auto"></i></div>
          
                    </div>
                    <div class="card-footer d-flex justify-content-evenlyalign-content-center justify-content-between text-muted">
                      <p style="margin-block: 1%;"> ${returnDate(element.pub_date)}  </p>
                      <div class="d-grid gap-2">
                        <a type="button" href="tel: ${element.phone}" class="btn btn-success text-light text-decoration-none"> إتصال  <i class="bi bi-telephone-outbound-fill px-2"></i></a>
                      </div>
                    </div>
                    </div>
                    </div>
                      `
                    }   
                    });
          
                     
                  }
              
            
        
        })
        });
    
   ///////////////////////////////////////////////////////////////////////
    
   
 /////////////////////////////////////////////////////////////////////////////////////////
});



