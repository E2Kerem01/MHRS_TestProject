const { I } = inject();

module.exports = {

  field:{},
  select:{},
  buttons:{},


  hastaneSeçme : function(){

    I.waitForElement('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[5]/div[@class="ant-col ant-form-item-control-wrapper"]/div[@class="ant-form-item-control"]/span[@class="ant-form-item-children"]/span[@class="ant-input-group ant-input-group-compact"]/span[@role="combobox"]//span[@class="ant-select-selection__placeholder"]');
    I.click('//div[@class="ant-form-item-control"]//span[@class="ant-select-selection__rendered"]//span[contains(text(),"İl Seçiniz")]');
    I.waitForElement('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]//div[@role="listbox"]//input');
    I.fillField('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]//div[@role="listbox"]//input','Ankara'); 
    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]//div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]//div[@role="listbox"]/ul[@role="tree"]/li[@role="treeitem"]/span[@title="ANKARA"]');
    I.waitForElement('/html//div[@id="randevuAramaForm_ilce"]')
    I.click('//div[@id="randevuAramaForm_ilce"]/div[@role="combobox"]//div[@class="ant-select-selection__placeholder"]');


    // polatlı tıklama
    I.waitForElement('//div[@id="randevuAramaForm_ilce"]/div[@role="combobox"]//div[@class="ant-select-search ant-select-search--inline"]//input[@id="randevuAramaForm_ilce"]');
    I.fillField('//div[@id="randevuAramaForm_ilce"]/div[@role="combobox"]//div[@class="ant-select-search ant-select-search--inline"]//input[@id="randevuAramaForm_ilce"]','polatlı');
    I.pressKey('Enter');

    I.waitForElement('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[3]/div[@class="ant-col ant-form-item-control-wrapper"]/div[@class="ant-form-item-control"]/span[@class="ant-form-item-children"]/span[@role="combobox"]//span[@class="ant-select-selection__rendered"]');
    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[3]/div[@class="ant-col ant-form-item-control-wrapper"]/div[@class="ant-form-item-control"]/span[@class="ant-form-item-children"]/span[@role="combobox"]//span[@class="ant-select-selection__rendered"]'); 

    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]//div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[12]/div/div/div[@role="listbox"]/ul[@role="tree"]/li[@role="treeitem"]/span[@title="İç Hastalıkları (Dahiliye)"]');
    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[4]/div[@class="ant-col ant-form-item-control-wrapper"]/div[@class="ant-form-item-control"]/span[@class="ant-form-item-children"]/span[@class="ant-input-group ant-input-group-compact"]/span[@role="combobox"]//span[@class="ant-select-selection__rendered"]');
    I.waitForElement('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[13]/div/div/div[@role="listbox"]/ul[@role="tree"]');
    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]//div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[13]/div/div/div[@role="listbox"]/ul[@role="tree"]/li[2]/span[@title="ANKARA POLATLI DUATEPE DEVLET HASTANESİ"]/span[@class="ant-select-tree-title"]');

    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[@role="tabpanel"]//form[@class="ant-form ant-form-horizontal randevu-arama-form"]/div[9]/div[@class="ant-col ant-form-item-control-wrapper"]/div[@class="ant-form-item-control"]/span[@class="ant-form-item-children"]/div[@class="ant-row"]//button[@type="submit"]');
    

  },

  doktorSeçme : function() {

    
    // DOKTOR SEÇME
    I.seeElement('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]/div/div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[2]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[1]//ul[@class="ant-list-items"]/li[3]/div[@class="ant-row"]/div[1]/span');
    I.click('//div/div[5][contains(text(),"GALİP")]');



  },

  randevuSaat : function() {

    // Randevu saati seçme
    I.waitForElement('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]//div[@class="ant-card-body"]');
    I.click('//div[@id="vatandasApp"]/section//div[@class="mhrs-container-custom"]/div[@class="ant-card"]/div[@class="ant-card-body"]/div/div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[2]//div[@class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"]/div[1]//div[@role="tablist"]/div[3]/div[@role="tab"]');
    
    // randevu dakikası seçme  
    //I.waitForElement('//div/div[@class="ant-collapse-content-box"]');
    I.click('//div//div[@role="tabpanel"]/div/button[6]');

    


  }


}
