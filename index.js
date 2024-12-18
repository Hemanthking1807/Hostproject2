const data = [
    {title:"MODEL S",description: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png'},
    {title:"MODEL 3",description: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png'},
    {title:"MODEL X",description: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png'},
    {title:"MODEL Y",description: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png'},
];
const data2=[
    { title2: 'Solar Panels',img : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png'},
    { title2: 'Solar Roofs',img : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png'},
    { title2: 'Power wall',img : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png'},
    { title2: 'Mega Pack',img : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png'}
]
const data3=[
    {title3:'Charging',img2:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png'},
    {title3:'Home charging',img2:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png'},
    {title3:'super charging',img2:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png'}
]

const data5=[
    {title4:'Charging',img3:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png'},
    {title4:'Vehicle Accessories',img3:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png'},
    {title4:'apparel',img3:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png'},
    {title4:'Lifestyle',img3:'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png'}
]


const hoverContent = document.querySelector('#hc1');
const dataContainer = document.querySelector('#dc1');
const navbar=document.querySelector('nav')
const hoverContent2 = document.querySelector('#hc2')
const hoverContent3 = document.querySelector('#hc3')
const hoverContent4 = document.querySelector('#hc4')
const hoverContent5 = document.querySelector('#hc5')
const hoverContent6 = document.querySelector('#hc6')


function updateData() {
    dataContainer.innerHTML = '';
  
    data.forEach(item => {
      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.innerHTML = `
        <img src="${item.description}" alt="${item.title}" style="width: 150px; height: 100px; border-radius: 10px; background-color: white;">
           <h5>${item.title}</h5>`;
      dataContainer.appendChild(contentElement);
    });
  }
  
function updateData2(){
    dataContainer.innerHTML = '';
  
    data2.forEach(item => {
      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.innerHTML = `
       
        <img src="${item.img}" alt="${item.title2}" style="width: 150px; height: 100px; border-radius: 10px; background-color: white;">
      <h5>${item.title2}</h5> `;
      dataContainer.appendChild(contentElement);
    });
}
function updateData3() {
    dataContainer.innerHTML = '';
  
    data3.forEach(item => {
      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.innerHTML = `
        <img src="${item.img2}" alt="${item.title3}" style="width: 150px; height: 100px; border-radius: 10px; background-color: white;">
       <h5>${item.title3}</h5>`;
      dataContainer.appendChild(contentElement);
    });
  }
  
  function updateData5() {
    dataContainer.innerHTML = '';
  
    data5.forEach(item => {
      const contentElement = document.createElement('div');
      contentElement.classList.add('content');
      contentElement.innerHTML = `
        <img src="${item.img3}" alt="${item.title4}" style="width: 150px; height: 100px; border-radius: 10px; background-color: white;">
       <h5>${item.title4}</h5>`;
      dataContainer.appendChild(contentElement);
    });
  }
  
hoverContent2.addEventListener('mouseenter', () => {

    updateData2();

    dataContainer.style.visibility = 'visible';
    dataContainer.style.opacity = '1';
    dataContainer.style.pointerEvents = 'auto';
});
hoverContent2.addEventListener('mouseleave', () => {
    dataContainer.style.visibility = 'hidden';
    dataContainer.style.opacity = '0';
    dataContainer.style.pointerEvents = 'none'; 
});

hoverContent.addEventListener('mouseenter', () => {
    updateData();
    
    //navbar.innerHTML=`style="background-color: white; color:black"`
    dataContainer.style.visibility = 'visible';
    dataContainer.style.opacity = '1';
    dataContainer.style.pointerEvents = 'auto'; 
});
dataContainer.addEventListener('mouseenter', () => {
    

    dataContainer.style.visibility = 'visible';
    dataContainer.style.opacity = '1';
    dataContainer.style.pointerEvents = 'auto'; 
});


hoverContent.addEventListener('mouseleave', () => {

    dataContainer.style.visibility = 'hidden';
    dataContainer.style.opacity = '0';
    dataContainer.style.pointerEvents = 'none'; 
});
dataContainer.addEventListener('mouseleave', () => {
    
    dataContainer.style.visibility = 'hidden';
    dataContainer.style.opacity = '0';
    dataContainer.style.pointerEvents = 'none'; 
});
hoverContent3.addEventListener('mouseenter', () => {

    updateData3();

    dataContainer.style.visibility = 'visible';
    dataContainer.style.opacity = '1';
    dataContainer.style.pointerEvents = 'auto';
});
hoverContent3.addEventListener('mouseleave', () => {
    dataContainer.style.visibility = 'hidden';
    dataContainer.style.opacity = '0';
    dataContainer.style.pointerEvents = 'none'; 
});

hoverContent5.addEventListener('mouseenter', () => {

    updateData5();

    dataContainer.style.visibility = 'visible';
    dataContainer.style.opacity = '1';
    dataContainer.style.pointerEvents = 'auto';
});
hoverContent5.addEventListener('mouseleave', () => {
    dataContainer.style.visibility = 'hidden';
    dataContainer.style.opacity = '0';
    dataContainer.style.pointerEvents = 'none'; 
});

const footer = document.querySelector('.footer');
let scrollTimeout;
function hideFooter() {
    footer.classList.add('hidden');
}
function showFooter() {
    footer.classList.remove('hidden');
}
window.addEventListener('scroll', () => {

    showFooter();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(hideFooter, 2000); 
});

hideFooter();
