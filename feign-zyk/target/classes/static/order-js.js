$(function () {
    var startTime = sessionStorage.startTime;
    var endTime = sessionStorage.endTime;
    var dayCount = sessionStorage.dayCount;
    var html = "<span>"+startTime  +"&nbsp;&nbsp;至&nbsp;&nbsp;"+  endTime+"&nbsp;&nbsp&nbsp;&nbsp;共计"+dayCount+"天</span>"
    $('#shijianduan').html(html)

})

function submitForm() {
    var peopleCount = $('#customer-num').val();
    var userName = $('#passenger-name').val();
    var userPhone = $('#user-phone').val();
    var shenfenzheng = $('#cert-number').val();
    var housePrice = sessionStorage.price;
    console.log(peopleCount)
    console.log(userName)
    console.log(userPhone)
    console.log(shenfenzheng)
    console.log(housePrice)
    if (userName==''&&userPhone==''&&shenfenzheng==''){

        bootbox.alert({
            message: "<span style='font-size: 20px;text-align: center'>您好,请您先填写入住人信息,再进行预订</span>",
            className: 'rubberBand animated'
        });
        return;
    }
    var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!TEL_REGEXP.test(userPhone)||!reg.test(shenfenzheng)) {
        bootbox.alert({
            size: "large",
            title: "<span style='font-size: 25px;text-align: center'>提示",
            message: "<span style='font-size: 20px;text-align: center'>请填写正确入住人信息</span>",
            callback: function () { /!* your callback code *!/
            }
        })
        return;
    }
    bootbox.confirm({
        message: "<span style='font-size: 20px'>恭喜您预订成功,是否立即进行在线支付?</span>",
        buttons: {
            confirm: {
                label: '进行支付',
                className: 'btn-success'
            },
            cancel: {
                label: '暂不支付',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            location.href="/alipay/goAlipay?price="+housePrice;
            console.log('This was logged in the callback: ' + result);
        }
    });
}

function initTime() {


}
