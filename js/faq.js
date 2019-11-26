window.addEventListener("load", faq, false);

function faq() {
    let faqOpen = new Vue({
        el: "#faq",
        data: {
            sign1: '+',
            sign2: '+',
            sign3: '+',
            sign4: '+',
            sign5: '+',
            sign6: '+',
            flag1: false,
            changeFlag: false,
            flag2: false,
            flag3: false,
            flag4: false,
            flag5: false,
            flag6: false,
            message: '',


        },
        methods: {
            changeFlags: function (e) {
                faqOpen.$data.changeFlag = true;
                document.getElementById("flag2").style.display = "none";
                window.location.href="#faq";
            },
            scrollUp: function () {
                if (faqOpen.$data.changeFlag === false) {
                    window.location.href = "#";
                } else {
                    faqOpen.$data.changeFlag = false;
                    document.getElementById("flag1").style.display = "none";
                    document.getElementById("flag2").style.display = "block";
                }


            },
            switchFlag1: function () {
                if (faqOpen.$data.flag1 === true) {
                    faqOpen.$data.flag1 = false;
                    faqOpen.$data.sign1 = "+";
                } else {
                    resetFlags();
                    faqOpen.$data.sign1 = "-";
                    faqOpen.$data.flag1 = true;
                }
            },
            switchFlag2: function () {
                if (faqOpen.$data.flag2 === true) {
                    faqOpen.$data.flag2 = false;
                    faqOpen.$data.sign2 = "+";
                } else {
                    resetFlags();
                    faqOpen.$data.sign2 = "-";
                    faqOpen.$data.flag2 = true;
                }
            },
            leave: function (el, done) {
            },
            enter: function (el, done) {

            },
            leave4: function (el, done) {
            },
            enter4: function (el, done) {
            },
            leave0: function (el, done) {
            },
            enter0: function (el, done) {
            },
            leave3: function (el, done) {
            },
            enter3: function (el, done) {
            },
            leave2: function (el, done) {
            },
            enter2: function (el, done) {
            },
            leave1: function (el, done) {
            },
            enter1: function (el, done) {
            },
            leave6: function (el, done) {

            },
            enter6: function (el, done) {
            },
            switchFlag3: function () {
                if (faqOpen.$data.flag3 === true) {
                    faqOpen.$data.flag3 = false;
                    faqOpen.$data.sign3 = "+";
                } else {
                    resetFlags();
                    faqOpen.$data.sign3 = "-";
                    faqOpen.$data.flag3 = true;
                }
            },
            switchFlag4: function () {
                if (faqOpen.$data.flag4 === true) {
                    faqOpen.$data.flag4 = false;
                    faqOpen.$data.sign4 = "+";
                } else {
                    resetFlags();
                    faqOpen.$data.sign4 = "-";
                    faqOpen.$data.flag4 = true;
                }
            },
            switchFlag5: function () {
                if (faqOpen.$data.flag5 === true) {
                    faqOpen.$data.flag5 = false;
                    faqOpen.$data.sign5 = "+";
                } else {
                    resetFlags();
                    faqOpen.$data.sign5 = "-";
                    faqOpen.$data.flag5 = true;
                }
            },
            switchFlag6: function () {
                if (faqOpen.$data.flag6 === true) {
                    faqOpen.$data.flag6 = false;
                    faqOpen.$data.sign6 = "+";
                } else {
                    resetFlags();
                    faqOpen.$data.sign6 = "-";
                    faqOpen.$data.flag6 = true;
                }
            }
        },

    });

    function resetFlags() {
        faqOpen.$data.sign1 = '+';
        faqOpen.$data.sign2 = "+";
        faqOpen.$data.sign3 = '+';
        faqOpen.$data.sign4 = "+";
        faqOpen.$data.sign5 = '+';
        faqOpen.$data.sign6 = "+";
        faqOpen.$data.flag1 = false;
        faqOpen.$data.flag2 = false;
        faqOpen.$data.flag3 = false;
        faqOpen.$data.flag4 = false;
        faqOpen.$data.flag5 = false;
        faqOpen.$data.flag6 = false;
    }

}