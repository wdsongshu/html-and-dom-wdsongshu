function printTotalGrade() {
    if(document.forms.form1.class.value.length === 0 || document.forms.form1.classNumber.value.length === 0 || document.forms.form1.name.value.length === 0)
    {
        return checkMessage();
    }
    
    var fillInGrade = getFillInGrade();

    var chooseGrade = getChooseGrade();

    var muchChooseGrade = getMuchChooseGrade();

    var judgeGrade = getJudgeGrade();

    var shortAnswer = getShortAnswerGrade();

    var totalGrade = fillInGrade + chooseGrade + muchChooseGrade + judgeGrade + shortAnswer;

    document.forms.form1.grade.value = totalGrade;
}

function checkMessage() {
    if (document.forms.form1.class.value.length === 0) {
        alert("请输入班级！");
    }
    else if (document.forms.form1.classNumber.value.length === 0) {
        alert('请输入学号！');
    }
    else if(document.forms.form1.name.value.length === 0) {
        alert('请输入姓名！');
    }
    else {}
}

function getFillInGrade() {
    var fillInGrade = 0;
    if (document.forms.form1.fillIn_1.value === '统一建模语言')
        fillInGrade += 5;
    if (document.forms.form1.fillIn_2_1.value === '封装性')
        fillInGrade += 5;
    if (document.forms.form1.fillIn_2_2.value === '继承性')
        fillInGrade += 5;
    if (document.forms.form1.fillIn_2_3.value === '多态性')
        fillInGrade += 5;
    return fillInGrade;
}

function getChooseGrade() {
    var chooseGrade = 0;
    if (document.forms.form1.choose_1_A.checked)
        chooseGrade += 10;
    if (document.forms.form1.choose_2_A.checked)
        chooseGrade += 10;

    return chooseGrade;
}

function getMuchChooseGrade() {
    var muchChooseGrade = 0;

    if (document.forms.form1.muchChoose_1_A.checked)
    {
        muchChooseGrade += 5;
    }
    if (document.forms.form1.muchChoose_1_B.checked)
    {
        muchChooseGrade += 5;
    }
    if (document.forms.form1.muchChoose_2_B.checked)
    {
        muchChooseGrade += 5;
    }
    if (document.forms.form1.muchChoose_2_C.checked)
    {
        muchChooseGrade += 5;
    }
    return muchChooseGrade;

}

function getJudgeGrade() {
    var judgeGrade = 0;

    if (document.forms.form1.judge_1_right.checked)
    {
        judgeGrade += 5;
    }
    if (document.forms.form1.judge_2_right.checked)
    {
        judgeGrade += 5;
    }
    return  judgeGrade;
}

function getShortAnswerGrade() {

    shortAnswer = [
        '模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。'
    ];

    return 30;
}

