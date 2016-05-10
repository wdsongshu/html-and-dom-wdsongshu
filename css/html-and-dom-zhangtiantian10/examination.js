function existValue(form) {
    var len1 = form.class.value.length;
    var len2 = form.schoolnumber.value.length;
    var len3 = form.name.value.length;
    if((len1 === 0) || (len2 === 0) || (len3 === 0)){
        if(len1 === 0){
            alert("没有输入班级！");
            return false;
        }
        if(len2 === 0){
            alert("没有输入学号！");
            return false;
        }
        if(len3 === 0){
            alert("没有输入姓名！");
            return false;
        }
    }
}

function getAnswers() {
    return [
        {
            form: document.forms[2],
            answer: '统一建模语言'
        },
        {
            form: document.forms[3],
            answer: ['封装性', '继承性', '多态性']
        },
        {
            form: document.forms[4],
            answer: '(B)'
        },
        {
            form: document.forms[5],
            answer: '(A)'
        },
        {
            form: document.forms[6],
            answer: '(A)(B)(D)'
        },
        {
            form: document.forms[7],
            answer: '(A)(B)(C)'
        },
        {
            form:document.forms[8],
            answer: '错'
        },
        {
            form: document.forms[9],
            answer: '对'
        },
        {
            form: document.forms[10],
            answer: '模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。'
        }
    ]
}

function getAnswer(form,answers) {
    for(var i = 0; i<answers.length;i++){
        if(form === answers[i].form){
            return answers[i].answer;
        }
    }
}

function existText1(form,answers) {
    if(form.text.value === getAnswer(form,answers)){
        return 10;
    }
    return 0;
}

function existRadios(radios,answers) {
    for(var i = 0; i < radios.gender.length; i++){
        if(radios.gender[i].checked){
            if(radios.gender[i].value === getAnswer(radios,answers)){
                return 5;
            }
        }
    }
    return 0;
}

function existCheckbox(checkbox,answers) {
    var answer = "";
    for(var i = 0;i<checkbox.interest.length; i++){
        var rb = checkbox.interest[i];
        if(rb.checked){
            answer += rb.value;
        }
    }
    if(answer === getAnswer(checkbox,answers)){
        return 15;
    }
    return 0;
}

function existText2(form,answers) {
    var answer = getAnswer(form,answers);
    var grade = 0;
    for(var i = 0; i<answer.length ; i++){
        if(form.text1.value === answer[i]){
            grade += 10;
        }
        if(form.text2.value === answer[i]){
            grade += 10;
        }
        if(form.text3.value === answer[i]){
            grade += 10;
        }
    }
    return grade;
}

function check() {
    var answers = getAnswers();
    var grade = 0;
    for(var i = 1; i<document.forms.length;i++){
        if(i === 1){
            if(existValue(document.forms[i]) === false){
                return false;
            }
        }
        else if(i === 2){
            grade += existText1(document.forms[i],answers);
        }
        else if(i === 3){
            grade += existText2(document.forms[i],answers);
        }
        else if (i<6){
            grade += existRadios(document.forms[i],answers);
        }
        else if(i<8){
            grade += existCheckbox(document.forms[i],answers);
        }
        else if(i<10){
            grade += existRadios(document.forms[i],answers);
        }
        else{
            grade += existText1(document.forms[i],answers);
        }
    }
    grade += ''
    document.forms[0].grade.value = grade;

}

