function Input() {

}

Input.getInputArrays = function () {
  var inputArrays = prompt.readLine('请输入密码：',function(password){
    return password;
  });

  return inputArrays;
};
module.exports = Input;
