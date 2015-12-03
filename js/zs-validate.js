;var zs = zs || {version: "0.1"};

(function($){

	"use strict";
	
	var _zsValidateMessage={
            required: "必输字段",
            rangelength: ["请输入一个长度介于 {0} 和 {1} 之间的字符串","请输入一个长度为{0}的字符串"],	 //rangelength:1-200
            number: "请输入合法的数字",
            digits: "只能输入整数",
            naturalnum: "只能输入自然数",
            stringEN: "只能输入字母",
            alnum: "只能输入字母+数字",
            idcardno: "只能输入身份证",
            postalcode: "只能输入邮政编码",
            email: "请输入正确格式的电子邮件",
            port: "请输入正确的端口",
            ip: "请输入正确ip地址",
            url: "请输入合法的网址",
            stringCN: "只能输入汉字",
            equalTo: "请再次输入相同的值",	//equalTo:#password
            mobile : "请输入正确的手机号码",
            amount:"请输入正确的金额,小数点后最多4位"
        };
	var _zsValidateRule={
            number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
            digits: /^\d+$/,
            naturalnum: /^[0-9]+$/,
            stringEN: /^[A-Za-z]+$/g,
            alnum: /^[a-zA-Z0-9]+$/,
            postalcode: /^[0-9]{6}$/,
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            ip: /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/,
            url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
            stringCN: /[^u4E00-u9FA5]/g,
            mobile : /^((1)+\d{10})$/,
            amount:/^(-)?(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,4})?$/
        };
        
    //校验映射    
	zs.validateElementMapping={};
	
	zs.validate=function(_initParameter){
		var _validateRules={};
		var _validateResult=true;
		var _optionParameter={
			id:null,
			validateTrigger:"blur",
			validatePlacement:"top"
		}
		_optionParameter=$.extend(_optionParameter,_initParameter);
		if(!_optionParameter.id||_optionParameter.id==null||_optionParameter.id==''){
			throw "The common's id is undefined";
		}
		
		function _zsElementValidateChecked(){
			_validateRules={};
			if(undefined!=$(_optionParameter.id)[0].dataset.zsValidate&&null!=$(_optionParameter.id)[0].dataset.zsValidate&&''!=$(_optionParameter.id)[0].dataset.zsValidate){
				var _ruleStrings=$(_optionParameter.id)[0].dataset.zsValidate.split(",");
				for(var _i=0;_i<_ruleStrings.length;_i++){
					if(!_isBlank(_ruleStrings[_i])){
						if($.trim(_ruleStrings[_i]).indexOf(":")>-1){
							_validateRules[$.trim(_ruleStrings[_i].split(":")[0])]=$.trim(_ruleStrings[_i].split(":")[1]);
						}else{
							_validateRules[$.trim(_ruleStrings[_i])]=true;
						}
					}
				}
			}
			_validateResult=true;
			_validateResult=_validateResult&&_validate_checking(_optionParameter,_validateRules);
		};
		
		if(undefined!=$(_optionParameter.id)[0]){
			zs.validateElementMapping[_optionParameter.id]=this;
			
			if(undefined!=$(_optionParameter.id)[0].dataset.zsValidateTrigger&&null!=$(_optionParameter.id)[0].dataset.zsValidateTrigger&&''!=$(_optionParameter.id)[0].dataset.zsValidateTrigger){
				_optionParameter.validateTrigger=$(_optionParameter.id)[0].dataset.zsValidateTrigger;
			}
			
			if(undefined!=$(_optionParameter.id)[0].dataset.zsValidatePlacement&&null!=$(_optionParameter.id)[0].dataset.zsValidatePlacement&&''!=$(_optionParameter.id)[0].dataset.zsValidatePlacement){
				_optionParameter.validatePlacement=$(_optionParameter.id)[0].dataset.zsValidatePlacement;
			}
			
			$(_optionParameter.id).on(_optionParameter.validateTrigger,function(e){
				_zsElementValidateChecked();
			});
		}
		
		this.getValidateResult=function(){
			_zsElementValidateChecked();
			return _validateResult;
		};
		this.checkValidate=function(){
			_zsElementValidateChecked();
			return _validateResult;
		};
	};
	
	zs.validateCheck=function(target,isFull){
		var _validateCheckResult=true;
		//遍历符合规则中的表单
		$(target).each(function(index){
			var isExistValidateUnit=zs.validateElementMapping.hasOwnProperty("#"+$(this).attr("id"));
			if(isExistValidateUnit||isFull){
				if($(this).attr("id")!=null||$(this).attr("id")!=''){
					if(!zs.validateElementMapping.hasOwnProperty("#"+$(this).attr("id"))){
						new zs.validate({id:"#"+$(this).attr("id")});
					}
					if(!zs.validateElementMapping["#"+$(this).attr("id")].getValidateResult()){
						_validateCheckResult=false;
						$(this).addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			   		        $(this).removeClass("animated shake");
			   		    });
					}
				}
			}
		});
		return _validateCheckResult;
	};
	
	
	/**内部使用方法**/
	
	function isDate8(sDate) {
	    if (!/^[0-9]{8}$/.test(sDate)) {
	        return false;
	    }
	    var year, month, day;
	    year = sDate.substring(0, 4);
	    month = sDate.substring(4, 6);
	    day = sDate.substring(6, 8);
	    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	    if (year < 1700 || year > 2500) return false
	    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
	    if (month < 1 || month > 12) return false
	    if (day < 1 || day > iaMonthDays[month - 1]) return false
	    return true
	}
	
	function isIdCardNo(num) {
		var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
		 var parityBit=new Array("1","0","X","9","8","7","6","5","4","3","2");
		 var varArray = new Array();
		 var intValue;
		 var lngProduct = 0;
		 var intCheckDigit;
		 var intStrLen = num.length;
		 var idNumber = num;
		  // initialize
	     if ((intStrLen != 15) && (intStrLen != 18)) {
	         return false;
	     }
	     // check and set value
	     for(var i=0;i<intStrLen;i++) {
	         varArray[i] = idNumber.charAt(i);
	         if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
	             return false;
	         } else if (i < 17) {
	             varArray[i] = varArray[i] * factorArr[i];
	         }
	     }
	     
	     if (intStrLen == 18) {
	         //check date
	         var date8 = idNumber.substring(6,14);
	         if (isDate8(date8) == false) {
	            return false;
	         }
	         // calculate the sum of the products
	         for(i=0;i<17;i++) {
	             lngProduct = lngProduct + varArray[i];
	         }
	         // calculate the check digit
	         intCheckDigit = parityBit[lngProduct % 11];
	         // check last digit
	         if (varArray[17] != intCheckDigit) {
	             return false;
	         }
	     }
	     return true;
	};
	
	function _isBlank(value){
		if(undefined==value||null==value||''==value){
			return true;
		}
		return false;
	}
	
	function _validate_checking(_optionParameter,_validateRules){
		var _excludeRegexpValidateArray=["required","rangelength","idcardno","port","ip","equalTo"];
		//required: "必选字段",
		if(_validateRules.hasOwnProperty("required")&&true===_validateRules.required){
			if(!_validate_required(_optionParameter.id)){
				_validate_showMessage(_optionParameter,_zsValidateMessage.required);
				$(_optionParameter.id).addClass("zs-validate-invalid").one("touchstart input propertychange",function(){
					$(this).removeClass("zs-validate-invalid");
				});
				
				return false;
			}
		}
		//rangelength: "请输入一个长度介于 {0} 和 {1} 之间的字符串",
		if(_validateRules.hasOwnProperty("rangelength")&&null!==_validateRules.rangelength&&''!=_validateRules.rangelength){
			var _lengthRangeArray=eval(_validateRules.rangelength.replace("-",","));
			var minLength=_lengthRangeArray[0];
			var maxLength=_lengthRangeArray[1];
			if(!_validate_rangelength(_optionParameter.id,minLength,maxLength)){
				if(minLength==maxLength){
					_validate_showMessage(_optionParameter,_zsValidateMessage.rangelength[1].replace("{0}",minLength));
				}else{
					_validate_showMessage(_optionParameter,_zsValidateMessage.rangelength[0].replace("{0}",minLength).replace("{1}",maxLength));
				}
				return false;
			}
		}
		//idcardno: "只能输入身份证",
		if(_validateRules.hasOwnProperty("idcardno")&&true===_validateRules.idcardno){
			if(!_validate_idcardno(_optionParameter.id)){
				_validate_showMessage(_optionParameter,_zsValidateMessage.idcardno);
				return false;
			}
		}
		//  port: "请输入正确的端口",
		if(_validateRules.hasOwnProperty("port")&&true===_validateRules.port){
			if(!_validate_port(_optionParameter.id)){
				_validate_showMessage(_optionParameter,_zsValidateMessage.port);
				return false;
			}
		}
		// ip: "请输入正确ip地址",
		if(_validateRules.hasOwnProperty("ip")&&true===_validateRules.ip){
			if(!_validate_ip(_optionParameter.id)){
				_validate_showMessage(_optionParameter,_zsValidateMessage.ip);
				return false;
			}
		}
		//  equalTo: "请再次输入相同的值",	//equalTo:#password
		if(_validateRules.hasOwnProperty("equalTo")&&null!==_validateRules.equalTo&&''!==_validateRules.equalTo){
			if(!_validate_equalTo(_optionParameter.id,_validateRules.equalTo)){
				_validate_showMessage(_optionParameter,_zsValidateMessage.equalTo);
				return false;
			}
		}
		
		//统一正则表达式校验
		for(var _a in _validateRules){
			if(_validateRules.hasOwnProperty(_a)&&$.inArray(_a,_excludeRegexpValidateArray)==-1){
				if(!_zsValidateRule[_a].test($(_optionParameter.id).val())&&!_isBlank($(_optionParameter.id).val())){
					_validate_showMessage(_optionParameter,_zsValidateMessage[_a]);
					return false;
				}
			}
		}
		return true;
	};
	
	
	function _validate_showMessage(_optionParameter,message){
		$(_optionParameter.id).one("touchstart input propertychange",function(e){
			$(this).tooltip("destroy");
		});
		$(_optionParameter.id).tooltip({placement:_optionParameter.validatePlacement,title:message,trigger:"manual"});
		$(_optionParameter.id).tooltip("show");
	};
	
	
	function _validate_required (id) {
		if(null==$.trim($(id).val())||''==$(id).val()){
			return false;
		}
		return true;
	};
	
	function _validate_rangelength (id,minLength,maxLength) {
		if(!($.trim($(id).val()).length>=minLength&&$.trim($(id).val()).length<=maxLength)&&!_isBlank($(id).val())){
			return false;
		}
		return true;
	};
	
	function _validate_idcardno (id) {
		if(!isIdCardNo($(id).val())&&!_isBlank($(id).val())){
			return false;
		}
		return true;
	};
	
	function _validate_ip (id) {
		if(!(_zsValidateRule.ip.test($(id).val())&&(RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256))&&!_isBlank($(id).val())){
			return false;
		}
		return true;
	};
	
	function _validate_port (id) {
		var value=$(id).val();
		if(!(value < 65536 && value > 0)&&!_isBlank($(id).val())){
			return false;
		}
		return true;
	};
	
	function _validate_equalTo (id,equalToId) {
		if($(id).val()==$(equalToId).val()){
			return true;
		}
		return false;
	};
	
})(jQuery);