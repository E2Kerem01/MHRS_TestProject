// in this file you can append custom step methods to 'I' object

module.exports = function() {

  let parameters = require ('./Parameters/hastane1.json');

  return actor({

    fields: {
      kullaniciadi: '//input[@id="LoginForm_username"]',
      sifre: '//input[@id="LoginForm_password"]'
    },

    buttons: {
      GirisButon:'//div/button[@class="ant-btn login-form-button login-button login-btn ant-btn-default ant-btn-block"]'
    },
    
    getEnvironmetParameters : function(key){

        return parameters[key];

    },

    login : function(){

      this.amOnPage(this.getEnvironmetParameters("url"));

      this.waitForElement('//input[@id="LoginForm_username"]');
      this.fillField('//input[@id="LoginForm_username"]',this.getEnvironmetParameters("kullanıcı_Adı"));
    
      this.waitForElement('//input[@id="LoginForm_password"]');
      this.fillField('//input[@id="LoginForm_password"]',this.getEnvironmetParameters("sifre"));

      this.waitForElement('//div/button[@class="ant-btn login-form-button login-button login-btn ant-btn-default ant-btn-block"]');
      this.click('//div/button[@class="ant-btn login-form-button login-button login-btn ant-btn-default ant-btn-block"]');

      // //this.waitForElement('//body/div[@id="vatandasApp"]/section[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]');
       
    },


    Randevualma :  function(){

        // Bu kısım randevu al dedikten sonra karşımıza çıkan aşı mı muaynemi kısmına cevap veren kısımdır.

        this.waitForElement('/html//div[@role="dialog"]/div[@role="document"]//div[@class="ant-modal-body"]');
        this.click('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]');
        
    }

  });
}
