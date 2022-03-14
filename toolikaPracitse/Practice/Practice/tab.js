class Tab {
    constructor(){
      if('serviceWorker' in navigator){
          navigator.serviceWorker
          .register('./sw_cache_pages.js')
          .then(()=> console.log('registered'))
          .catch((err)=> console.log(err))
      }
        this.addListner();
    }
    getTabList= () => {
        return document.getElementById('tablist').children;
    }
    addListner = () => {
        const tabList = this.getTabList();
       
        for(const i in tabList){
           console.log(tabList[i].value, tabList)
            tabList[i].addEventListener('click', ()=> this.showPara(tabList[i].value))
        }
    }
    showPara = (index) => {
        console.log(index)
        const tab = `tab${index}`
        
        switch (tab) {
            case 'tab1' :
            document.getElementById('tab1').style.display = 'block';
            document.getElementById('tab2').style.display = 'none';
            document.getElementById('tab3').style.display = 'none';
            break;
            case 'tab2' :
            document.getElementById('tab1').style.display = 'none';
            document.getElementById('tab2').style.display = 'block';
            document.getElementById('tab3').style.display = 'none';
            break;
            case 'tab3' :
            document.getElementById('tab1').style.display = 'none';
            document.getElementById('tab2').style.display = 'none';
            document.getElementById('tab3').style.display = 'block';
            break;

        }
       
         
   
}
}

window.addEventListener('load', ()=> new Tab())