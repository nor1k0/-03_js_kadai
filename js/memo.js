// ラジオボタン表示出し分け
// https://since-inc.jp/blog/4686

 $(function() {
   $('[name="btn"]:radio').change( function() {
         if($('[id=am]').prop('checked')){
       $('.main').fadeOut();
       $('.mainam').fadeIn();
     } else if ($('[id=pm]').prop('checked')) {
       $('.mainam').fadeOut();
       $('.mainpm').fadeIn();
     } 
   });
 });


// 複数メモ保存
// https://univ-programmer.com/feweek4-4/
// https://www.flyenginer.com/low/javascript/javascript%E3%81%A7%E9%85%8D%E5%88%97%E3%81%A8json%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E6%96%87%E5%AD%97%E5%88%97%E3%81%A8%E3%81%97%E3%81%A6%E5%87%BA%E5%8A%9B.html


$("#save").click(function () { 
    let datalist = [];
    let key = $("#key").val();
    // let datalist = {
    //     data0:"memo0",data1 :"memo1"
    // };

    const data = {
        data0:$("#memo").val(),
        data1:$("#memo1").val(),
        data2:$("#memo2").val(),
        data3:$("#memo3").val(),
        data4:$("#memo4").val(),
        data5:$("#memo5").val()
    };

    datalist.push(data)
    console.log(datalist);
    localStorage.setItem(key ,  JSON.stringify(datalist));

    const yomikomi = localStorage.getItem(key);
    const result = JSON.parse(yomikomi);
    console.log(result);

    console.log(result[0].data1);
    const value0 =(result[0].data0);
    const value1 =(result[0].data1);
    const value2 =(result[0].data2);
    const value3 =(result[0].data3);
    const value4 =(result[0].data4);
    const value5 =(result[0].data5);


    //  console.log(value1);

    // http://itemy.net/?p=1427    
    // for (var i = 0; i < result.length; i++) {
    //     for (var key2 in result[i]) {
    //     console.log(result[i][key2]);
    //     $("#a").append(result[i][key2]);
    // }};

    const html1 = `
    <tr>
        <th>${key}</th>
        <td>${value0}</td>
        <td>${value1}</td>
        <td>${value2}</td>
    </tr>    `;
    $("#list1").append(html1);

    const html2= `
    <tr>
        <th>${key}</th>
        <td>${value3}</td>
        <td>${value4}</td>
        <td>${value5}</td>
    </tr>    `;
    $("#list2").append(html2);

});

//2.clear クリックイベント
$("#clear").on("click", function () {
     localStorage.clear();
     $("#list1").empty();
     $("#list2").empty();
 });

//3.ページ読み込み：保存データ取得表示
 for (let i = 0; i < localStorage.length; i++) {
 const localdate = localStorage.key(i)
 const value = localStorage.getItem(localdate)
 const henkan = JSON.parse(value);
 let key = localStorage.key(i);

 console.log(henkan[0].data1);
 const value0 =(henkan[0].data0);
 const value1 =(henkan[0].data1);
 const value2 =(henkan[0].data2);
 const value3 =(henkan[0].data3);
 const value4 =(henkan[0].data4);
 const value5 =(henkan[0].data5);

 const html1 = `
 <tr>
     <th>${key}</th>
     <td>${value0}</td>
     <td>${value1}</td>
     <td>${value2}</td>
 </tr>    `;
 $("#list1").append(html1);

 const html2= `
 <tr>
     <th>${key}</th>
     <td>${value3}</td>
     <td>${value4}</td>
     <td>${value5}</td>
 </tr>    `;
 $("#list2").append(html2);

 };

//  名言ランダム
 var meigen_random = Math.floor(Math.random() * 5);
  if(meigen_random === 0){
    $("#meigen").text("年齢は問題ではない。問題となるのは年齢に対する我々の考え方だ。byキケロ");
  }else if(meigen_random === 1){
    $("#meigen").text("人生の歴史において、変化ほど変わらぬものはない。byチャールズ・ダーウィン");
  }else if(meigen_random === 2){
    $("#meigen").text("もつ価値があるものは何だって、待つだけの価値があるものよ。byマリリン・モンロー");
  }else if(meigen_random === 3){
    $("#meigen").text("目的地ばかり見ていると、旅の楽しみをだいなしにしてしまう。byフリードリヒ・リュッケルト");
  }else if(meigen_random === 4){
    $("#meigen").text("愛するものを自由にしなさい。それが返ってきたときはーずっとあなたのものになる。by孔子");
  }else if(meigen_random === 5){
    $("#meigen").text("道は、進むことによってつくられる。byフランツ・カフカ");
  }