const { I } = inject();

module.exports = {

  fields: {},
  select : {},
  buttons : {},


  // mesajKutusunuKapat : async function() {
  //   // //mesaj kutusu kapatma
  //   // I.switchto('//iframe[@id="bafexplorer"');
  //   // let mesajKutusu = await I.grapNumberOfVisibleElements('//div[@id="x-tool x-tool-close"]');
  //   // if(mesajKutusu !== 0){
  //   //     I.click('//div[@id="x-tool x-tool-close"]');

  //   // 
  // }

   kayıtKabulEkranAc : function() { 

    I.waitForElement('/html//div[@id="vatandasApp"]');
    I.click('//div[@class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-8 ant-col-xl-8"]/div[@class="ant-card randevu-card hasta-randevu-card"]')
    I.waitForElement('//div[@role="document"]/div/div[@class="ant-modal-body"]');
    I.click('//div[@role="document"]/div[2]/div/div/div/div/div/button[@class="ant-btn randevu-turu-button genel-arama-button ant-btn-lg"]');

     
   }



}
