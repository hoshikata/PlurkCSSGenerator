{
  //
  //----- 宣告物件陣列
  // 所有控制的css列表
  let cssList = {
    bgc: {
      css: 'background-color',
      title: '背景顏色',
      alpha: [0, 1, 0.1],
    },
    c: {
      css: 'color',
      title: '文字顏色',
      alpha: [0, 1, 0.1],
    },
    fz: {
      css: 'font-size',
      title: '文字大小',
      value: [10, 30, 1],
    },
    opa: {
      css: 'opacity',
      title: '透明度',
      value: [0, 1, 0.1],
    },
    bdrs: {
      css: 'border-radius',
      title: '圓角',
      value: [0, 50, 1],
      units: ['px', '%'],
    },
    bd: {
      css: 'border',
      title: '邊框',
      value: [0, 5, 1],
    },
    sha: {
      css: 'box-shadow',
      title: '陰影',
      value: [-10, 10, 1],
      blur: [0, 20, 1],
      alpha: [0, 1, 0.1],
    },
    dp: {
      css: 'display',
      title: '隱藏區塊',
    },
    blur: {
      css: 'filter',
      title: '模糊化',
      value: [0, 5, 1],
    },
    posi: {
      css: 'position',
      title: '位置',
      top: [-300, 1000, 1],
      left: [-1000, 200, 1],
    },
    size: {
      css: 'width, height',
      title: '大小',
    },
    dcbgi: {
      css: 'background-image',
      title: '背景圖',
    },
    pcoinbgi: {
      css: 'background-image',
      title: '背景圖',
    },
    tlbgi: {
      css: 'background-image',
      title: '背景圖',
    },
    tlbgirep: {
      css: 'background-repeat',
      title: '重複',
    },
    tlbgiposi: {
      css: 'background-position',
      title: '位置',
      left: [0, 100, 1],
    },
    up: {
      css: '',
      title: '上移',
    },
    boxup: {
      css: '',
      title: '上移',
    },
    open: {
      css: '',
      title: '頻道展開',
      value: ['no', 'top', 'right'],
      text: ['不展開', '向上', '向右'],
    },
    ftposi: {
      css: '',
      title: '頻道位置',
      value: ['no', 'right'],
      text: ['原處', '往右放'],
    },
    toicon: {
      css: '',
      title: '圖示化',
    },
    countposi: {
      css: '',
      title: '圖示化的未讀位置',
      value: ['right', 'left', 'top'],
      text: ['右邊', '左邊', '上面'],
    },
  };
  // input與label的html內容
  let plurkCntList = [
    {
      title: '噗首的普通外觀',
      subtitle: '.timeline-cnt .plurk_cnt',
      name: 'plurkcnt_normal',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '噗首被滑鼠移至的外觀',
      subtitle: '.timeline-cnt .link_extend .plurk_cnt',
      name: 'plurkcnt_hover',
      csstype: ['opa'],
    },
    {
      title: '噗首被展開後的外觀',
      subtitle: '.timeline-cnt .plurk_box .plurk_cnt',
      name: 'plurkcnt_extend',
      csstype: ['opa'],
    },
    {
      title: 'R18的噗首外觀',
      subtitle: '.timeline-cnt .porn:not(.link_extend) .text_holder',
      name: 'plurkcnt_r18',
      csstype: ['blur'],
    },
    {
      title: '噗首的頭像',
      subtitle: '.timeline-cnt .p_img',
      name: 'plurkcnt_pimg',
      csstype: ['opa', 'bdrs', 'bd', 'sha'],
      hidden: true,
    },
    {
      title: '噗的回應數',
      subtitle: '.timeline-cnt .response_count',
      name: 'plurkcnt_count',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '噗的未讀回應數',
      subtitle: '.timeline-cnt .new .response_count',
      name: 'plurkcnt_newcount',
      csstype: ['bgc', 'c', 'opa'],
    },
    {
      title: '噗友暱稱',
      subtitle: '.timeline-cnt .td_qual > span',
      name: 'plurkcnt_pname',
      csstype: ['up'],
    },
    {
      title: '噗的圖片',
      subtitle: '.timeline-cnt .plurk_cnt a.pictureservices',
      name: 'plurkcnt_pic',
      csstype: ['opa', 'bdrs', 'sha'],
    },
    {
      title: '噗的有圖連結',
      subtitle: '.timeline-cnt .plurk_cnt a.meta',
      name: 'plurkcnt_piclink',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd'],
    },
    {
      title: '噗的有圖連結內的圖片',
      subtitle: '.timeline-cnt .plurk_cnt a.meta img',
      name: 'plurkcnt_piclinkimg',
      csstype: ['opa', 'bdrs'],
    },
    {
      title: '噗的普通連結',
      subtitle: '.timeline-cnt .plurk_cnt a.ex_link',
      name: 'plurkcnt_link',
      csstype: ['c', 'fz'],
    },
    {
      title: '噗的時間顯示',
      subtitle: '.timeline-timeshow',
      name: 'timeline_plurktime',
      csstype: ['bgc', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '時間軸的時間',
      subtitle: '.bottom_start',
      name: 'timeline_time',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '時間軸的線',
      subtitle: '#bottom_line',
      name: 'timeline_line',
      csstype: ['bgc', 'opa'],
    },
  ];
  let plurkBoxList = [
    {
      title: '噗內整體調整',
      subtitle: '#form_holder',
      name: 'plurkbox_holder',
      csstype: ['opa', 'bdrs', 'bd', 'sha'],
      hidden: true,
    },
    {
      title: '噗內喜歡數',
      subtitle: '.favorite_count',
      name: 'plurkbox_favorite',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '噗內轉噗數',
      subtitle: '.replurk_count',
      name: 'plurkbox_replurk',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '噗內書籤標籤',
      subtitle: '.bookmark_info',
      name: 'plurkbox_bookmark',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '噗內私噗標籤',
      subtitle: '.private_info',
      name: 'plurkbox_private',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '噗內回應區',
      subtitle: '.response_box',
      name: 'plurkbox_resbox',
      csstype: ['bgc'],
    },
    {
      title: '回應內容',
      subtitle: '.response_box .list .plurk_cnt',
      name: 'plurkbox_reslist',
      csstype: ['bgc', 'c', 'fz', 'bdrs', 'bd'],
    },
    {
      title: '噗主回應內容',
      subtitle: '.response_box .list .highlight_owner .plurk_cnt',
      name: 'plurkbox_ownlist',
      csstype: ['bgc', 'c', 'fz', 'bdrs', 'bd'],
    },
    {
      title: '噗內暱稱上移',
      subtitle: '#form_holder .plurk_cnt .td_qual',
      name: 'plurkbox_listname',
      csstype: ['boxup'],
    },
    {
      title: '噗內輸入區',
      subtitle: '.plurk_box .mini_form',
      name: 'plurkbox_form',
      csstype: ['bgc'],
    },
  ];
  let controlList = [
    {
      title: '更新的按鈕',
      subtitle: '#updater .item a',
      name: 'control_updatebtn',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '更新的未讀數字',
      subtitle: '#updater .unread_generic',
      name: 'control_updatecount',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '頻道的型態',
      subtitle: '#filter_tab',
      name: 'control_filterstyle',
      csstype: ['open', 'ftposi', 'toicon', 'countposi'],
    },
    {
      title: '頻道的普通按鈕',
      subtitle: '#filter_tab a',
      name: 'control_filterbtn',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '頻道的選中按鈕',
      subtitle: '#filter_tab a.filter_selected',
      name: 'control_filterselect',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '頻道的未讀數字',
      subtitle: '#filter_tab a .unread_generic',
      name: 'control_filtercount',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
  ];
  let dashboardLeftList = [
    {
      title: '主控台整體',
      subtitle: '#plurk-dashboard',
      name: 'dashboard_board',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '主控台內分區',
      subtitle: '.dash-segment .segment-content',
      name: 'dashboard_segment',
      csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '個人資料區整體',
      subtitle: '.dash-segment-profile .segment-content',
      name: 'profile_segment',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '個人頭像',
      subtitle: '#plurk-dashboard .dash-group-left #dash-profile img.profile-pic',
      name: 'profile_img',
      csstype: ['opa', 'bdrs', 'sha'],
    },
    {
      title: '個人暱稱',
      subtitle: '#plurk-dashboard .dash-group-left #dash-profile #full_name .display_name',
      name: 'profile_name',
      csstype: ['c', 'fz', 'opa'],
    },
    {
      title: '私噗按鈕',
      subtitle: '.friend_man.private_plurk',
      name: 'profile_private',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs'],
    },
    {
      title: '送禮按鈕',
      subtitle: '.friend_man.send_gift',
      name: 'profile_gift',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs'],
    },
  ];
  let dashboardRightList = [
    {
      title: '發噗區整體',
      subtitle: '.dash-segment-post .segment-content',
      name: 'post_segment',
      csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '發噗按鈕',
      subtitle: '.submit_img_color',
      name: 'post_submit',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '卡碼資訊區整體',
      subtitle: '.dash-segment-stats .segment-content',
      name: 'stats_segment',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '統計資訊',
      subtitle: '#plurk-dashboard .dash-segment #dash-stats table td',
      name: 'stats_fzcolor',
      csstype: ['c', 'fz'],
    },
    {
      title: '卡碼',
      subtitle: '.dash-stats-karma',
      name: 'stats_karma',
      csstype: ['dp'],
    },
    {
      title: '好友區整體',
      subtitle: '.dash-segment-friends .segment-content',
      name: 'friends_segment',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '紛絲區整體',
      subtitle: '.dash-segment-fans .segment-content',
      name: 'fans_segment',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    {
      title: '好友粉絲頭像整體',
      subtitle: '.friend_holder img',
      name: 'friends_img',
      csstype: ['opa', 'bdrs', 'sha'],
    },
    {
      title: '好友按鈕',
      subtitle: '#dash-friends .friend_man',
      name: 'friends_friendbtn',
      csstype: ['dp'],
    },
    {
      title: '好友連結',
      subtitle: '#dash-friends .show_all_friends, #dash-friends .show_mutual_friends',
      name: 'friends_friendlink',
      csstype: ['dp'],
    },
    {
      title: '好友頭像',
      subtitle: '#dash-friends .friend_holder',
      name: 'friends_friendimg',
      csstype: ['dp'],
    },
    {
      title: '粉絲按鈕',
      subtitle: '#dash-fans .friend_man',
      name: 'fans_fanbtn',
      csstype: ['dp'],
    },
    {
      title: '粉絲連結',
      subtitle: '#dash-fans .show_all_friends',
      name: 'fans_fanlink',
      csstype: ['dp'],
    },
    {
      title: '粉絲頭像',
      subtitle: '#dash-fans .friend_holder',
      name: 'fans_fanimg',
      csstype: ['dp'],
    },
    {
      title: '徽章區',
      subtitle: '#plurk-dashboard .dash-segment-award',
      name: 'award_segment',
      csstype: ['dp'],
    },
  ];
  let otherList = [
    {
      title: '噗浪生物',
      subtitle: '#dynamic_logo::after',
      name: 'dynamic_ori',
      csstype: ['dcbgi', 'size', 'posi', 'opa'],
    },
    {
      title: '官方生物',
      subtitle: '#dynamic_logo #creature',
      name: 'dynamic_creature',
      csstype: ['opa'],
    },
    {
      title: '時間軸生物',
      subtitle: '.timeline-bg',
      name: 'tl_bg',
      csstype: ['tlbgi', 'tlbgirep', 'tlbgiposi'],
    },
    {
      title: '噗幣旁生物',
      subtitle: '.profile-icons::before',
      name: 'p_coin',
      csstype: ['pcoinbgi', 'size', 'opa'],
    },
  ];
  // contentList的物件名稱變成陣列
  let contentList = [plurkCntList, plurkBoxList, controlList, dashboardLeftList, dashboardRightList, otherList];
  // menu列表
  let menuBlock = ['th', 'fh', 'tc', 'dhl', 'dhr', 'other'];

  // ===== html生成部分 ============================================================
  //----- input跟label html生成
  function titleHtml(item, inner) {
    return `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${inner}
    </div>
    `;
  }
  // 各種input type的css
  function colorHtml(name, csstype, need, ph) {
    const placeholder = ph ? `placeholder="${ph}"` : '';
    const dataNeed = need ? `data-need="true"` : '';
    return `
    <div class="row m-0">
      <input class="${name}_${csstype} colorBox" type="text" name="${name}_${csstype}" ${dataNeed} ${placeholder} />
      <input class="colorBox" type="color" />
    </div>
    `;
  }
  function rangeHtml(name, csstype, valueArr, need, ph) {
    const placeholder = ph ? `placeholder="${ph}"` : '';
    const dataNeed = need ? `data-need="true"` : '';
    return `
    <div class="row m-0">
      <input class="${name}_${csstype} rangeBox" type="text" name="${name}_${csstype}" ${dataNeed} ${placeholder} />
      <input class="rangeBox" type="range" min="${valueArr[0]}" max="${valueArr[1]}" step="${valueArr[2]}" value="0"/>
    </div>
    `;
  }
  function checkHtml(name, csstype) {
    return `
    <div class="row m-0">
      <input id="${name}_${csstype}" class="inputDisplay" type="checkbox" name="${name}_${csstype}" />
      <label for="${name}_${csstype}" class="inputDisplay">NO</label>
    </div>
    `;
  }
  function radioHtml(name, csstype, value, text) {
    let preArr = [];
    for (let i = 0; i < value.length; i++) {
      preArr.push(`
      <input id="${name}_${csstype}_${i+1}" class="${csstype} radioBox" type="radio" name="${name}_${csstype}" value="${value[i]}" />
      <label for="${name}_${csstype}_${i+1}" class="radioBox">${text[i].toUpperCase()}</label>
      `)
    }
    let span = csstype === 'bdrs' ? `<span class="radioBox">單位</span>` : '';
    return `<div class="row m-0">${span}${preArr.join('')}</div>`
  }
  function textHtml(name, csstype, need, ph) {
    const placeholder = ph ? `placeholder="${ph}"` : '';
    const dataNeed = need ? `data-need="true"` : '';
    return `
    <div class="row m-0">
      <input class="${name}_${csstype}" type="text" name="${name}_${csstype}" ${dataNeed} ${placeholder} />
    </div>
    `;
  }
  //  把判斷是什麼類型的csstype獨立出並依樣式呼叫各種input type的function，最後回傳preHtml
  function preHtmlSwitch(key, item) {
    let typeCheck = ['dp', 'tlbgirep', 'up', 'boxup', 'toicon'].includes(item);
    let preHtml = typeCheck ? titleHtml(item, checkHtml(key.name, item)) : '';
    return preHtml;
  }
  function preHtmlRange(key, item) {
    let typeCheck = ['fz', 'opa', 'blur'].includes(item);
    let preHtml = typeCheck ? titleHtml(item, rangeHtml(key.name, item, cssList[item].value, true)) : '';
    return preHtml;
  }
  function preHtmlBgc(key, item) {
    let typeCheck = item === 'bgc' || item === 'c';
    let preHtml = typeCheck ? titleHtml(item, `
      ${colorHtml(key.name, item, true, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].alpha, false, '透明')}
    `) : '';
    return preHtml;
  }
  function preHtmlBdrs(key, item) {
    let typeCheck = item === 'bdrs';
    let preHtml = typeCheck ? titleHtml(item, `
      ${rangeHtml(key.name, item, cssList[item].value, true)}
      ${radioHtml(key.name, item, cssList[item].units, cssList[item].units)}
    `) : '';
    return preHtml;
  }
  function preHtmlBd(key, item) {
    let typeCheck = item === 'bd';
    let preHtml = typeCheck ? titleHtml(item, `
      ${colorHtml(key.name, item, true, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].value, true, '粗細')}
    `) : '';
    return preHtml;
  }
  function preHtmlSha(key, item) {
    let typeCheck = item === 'sha';
    let preHtml = typeCheck ? titleHtml(item, `
      ${colorHtml(key.name, item, true, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].alpha, false, '透明')}
      ${rangeHtml(key.name, item, cssList[item].value, true, '距離')}
      ${rangeHtml(key.name, item, cssList[item].blur, true, '模糊')}
    `) : '';
    return preHtml;
  }
  function preHtmlPosi(key, item) {
    let typeCheck = item === 'posi';
    let preHtml = typeCheck ? titleHtml(item, `
      ${rangeHtml(key.name, item, cssList[item].top, false, '上方')}
      ${rangeHtml(key.name, item, cssList[item].left, false, '左方')}
    `) : '';
    return preHtml;
  }
  function preHtmlSize(key, item) {
    let typeCheck = item === 'size';
    let preHtml = typeCheck ? titleHtml(item, `
      ${textHtml(key.name, item, true, '寬度')}
      ${textHtml(key.name, item, true, '高度')}
    `) : '';
    return preHtml;
  }
  function preHtmlBgi(key, item) {
    let typeCheck = ['dcbgi', 'tlbgi', 'pcoinbgi'].includes(item);
    let preHtml = typeCheck ? titleHtml(item, `
      ${textHtml(key.name, item, true, '圖片網址')}
    `) : '';
    return preHtml;
  }
   function preHtmlBgiposi(key, item) {
    let typeCheck = item === 'tlbgiposi';
    let preHtml = typeCheck ? titleHtml(item, rangeHtml(key.name, item, cssList[item].left, false, '左方')) : '';
    return preHtml;
  }
  function preHtmlOpen(key, item) {
    let typeCheck = item === 'open';
    let preHtml = typeCheck ? titleHtml(item, `
      ${radioHtml(key.name, item, cssList[item].value, cssList[item].text)}
    `) : '';
    return preHtml;
  }
  function preHtmlFtposi(key, item) {
    let typeCheck = item === 'ftposi';
    let preHtml = typeCheck ? titleHtml(item, `
      ${radioHtml(key.name, item, cssList[item].value, cssList[item].text)}
    `) : '';
    return preHtml;
  }
  function preHtmlCountposi(key, item) {
    let typeCheck = item === 'countposi';
    let preHtml = typeCheck ? titleHtml(item, `
      ${radioHtml(key.name, item, cssList[item].value, cssList[item].text)}
    `) : '';
    return preHtml;
  }
  // 巡迴各物件後，將preHtml加到resultHtml上
  function blockHtmlCreate(lists, blockArr) {
    // 創一個變數裝所有html的內容
    let resultHtml = '';
    lists.forEach(list => {
      // 找csstype的部分
      let cssType = list.csstype;
      // 先創一個變數來裝巡迴後的陣列內容跟Html
      let preHtml = '';
      // 巡迴陣列產生html加到preHtml
      cssType.forEach(type => {
        // 加上各個preHtml
        preHtml += preHtmlSwitch(list, type);
        preHtml += preHtmlRange(list, type);
        preHtml += preHtmlBgc(list, type);
        preHtml += preHtmlBdrs(list, type);
        preHtml += preHtmlBd(list, type);
        preHtml += preHtmlSha(list, type);
        preHtml += preHtmlPosi(list, type);
        preHtml += preHtmlSize(list, type);
        preHtml += preHtmlBgi(list, type);
        preHtml += preHtmlBgiposi(list, type);
        preHtml += preHtmlOpen(list, type);
        preHtml += preHtmlFtposi(list, type);
        preHtml += preHtmlCountposi(list, type);
      });
      // input跟結尾標籤的html
      // 呼叫preHtml
      resultHtml += `
    <div id="${list.name}" class="container">
      <h2 data-selector="${list.subtitle}">${list.title}</h2>
      <div class="row m-0">
        ${preHtml}
      </div>
    </div>
    `;
    })
    // 抓到生產Html的區塊後加上resultHtml
    document.querySelector(blockArr + ' .enter_block').innerHTML = resultHtml;
  }

  //----- 建立子選單
  function subMenuCreate(lists, blockArr, menuArr) {
    let resultMenu = '';
    let preMenu = '';
    let reviewMenu = `<li class="item"><a href="#review_${menuArr}" class="review_btn">預覽</a></li>`;
    lists.forEach(list => {
      preMenu += `<li class="item"><a href="#${list.name}">${list.title}</a></li>`;
    })
    if (lists !== otherList) resultMenu += `<ul class="menu_list">${reviewMenu}${preMenu}</ul>`;
    else resultMenu += `<ul class="menu_list">${preMenu}</ul>`;
    document.querySelector(blockArr + ' .menu_sub').innerHTML = resultMenu;
  }

  //----- 巡迴menuBlock讓blockHtmlCreate跟subMenuCreate的內容加上各自的contentList
  contentList.forEach((item, i) => {
    blockHtmlCreate(item, '#' + menuBlock[i] + '_block');
    subMenuCreate(item, '#' + menuBlock[i] + '_block', menuBlock[i]);
  });

  // ===== 其他功能 ============================================================
  //----- 把所有第一個radio都預設checked
  let radioChecked = document.querySelectorAll('[type="radio"]:first-of-type')
  radioChecked.forEach(radio => {
    radio.checked = true;
  });

  //----- 如果圖示化yes則讓未讀位置可操作
  // 抓到圖示化的checkbox
  let toIconCheckBox = document.querySelector('#control_filterstyle_toicon');
  let countPosiBox = document.querySelectorAll('[name="control_filterstyle_countposi"]');
  countPosiBox.forEach(item => item.disabled = true);
  toIconCheckBox.addEventListener('change', () => {
    // 抓到圖示化的未讀位置的radio box
    // 巡迴radio box並判斷什麼時候disabled是false
    countPosiBox.forEach((item) => {
      if (toIconCheckBox.checked) item.disabled = false;
      else item.disabled = true;
    });
  });

  //----- input中可以調整的值(色盤、滑桿)互放到對方上
  // 把要抓的class設陣列
  let valueCatch = [
    ['.colorBox[type="color"]', '.colorBox[type="text"]'],
    ['.colorBox[type="text"]', '.colorBox[type="color"]'],
    ['.rangeBox[type="range"]', '.rangeBox[type="text"]'],
    ['.rangeBox[type="text"]', '.rangeBox[type="range"]'],
  ];
  // 監聽input事件，然後把值傳到相對應的input中
  function valueIn(array) {
    let inputBox = document.querySelectorAll(array[0]);
    let valueBox = document.querySelectorAll(array[1]);
    inputBox.forEach((item, i) => {
      inputBox[i].addEventListener('input', () => {
        // 讓值從input傳至value中
        valueBox[i].value = inputBox[i].value;
        // 讓值傳進去input:text裡時也能加上.no-empty
        if (inputBox[i].getAttribute('type') !== 'text') {
          valueBox[i].classList.add('no-empty');
        }
      });
    });
  }
  valueCatch.forEach((item) => {
    valueIn(item);
  });

  //----- 判斷隱藏區塊是否是checked來改變label的文字
  // 抓到input:checked
  let displayChecked = document.querySelectorAll('input.inputDisplay');
  // 巡迴displayChecked
  displayChecked.forEach((item, i) => {
    // 抓到要改變的label
    let displayLabel = document.querySelectorAll('label.inputDisplay');
    // 當input:checked狀態改變時，改變label
    item.addEventListener('change', () => {
      if (item.checked) displayLabel[i].textContent = 'YES';
      else displayLabel[i].textContent = 'NO';
    });
  });

  //----- 判斷輸入框有無值
  // 抓到input
  let input = document.querySelectorAll('.input_box input[type="text"]');
  // 巡所有的input
  input.forEach((item) => {
    // 當輸入內容change時做動作
    item.addEventListener('input', () => {
      // 當input的value不為空值時，加上class，否則移除class
      if (item.value !== '') item.classList.add('no-empty');
      else item.classList.remove('no-empty');
    });
  });

  //----- 輸入區的選單切換
  // 抓到menuToggle裡面的item
  let menuToggle = document.querySelector('.menu_toggle').querySelectorAll('.item');
  // 巡所有的item，當item被click時做動作
  menuToggle.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      // 先刪除全部的active class，再加上現在需要的active
      let currentActive = document.querySelector('.menu_toggle').querySelector('.active');
      currentActive.className = currentActive.className.replace(' active', '');
      e.target.className += ' active';
      // 先刪除全部的display class，再加上現在需要的display
      let currentDisplay = document.querySelector('.main > .display');
      currentDisplay.className = currentDisplay.className.replace(' display', '');
      let plusDisplayBlock = document.querySelectorAll('.main > .control');
      plusDisplayBlock[i].className += ' display';
    });
  });

  //----- 選單的RWD漢堡
  // 抓到漢堡選單
  let togglerItem = document.querySelector('.toggler');
  // 抓到改變的menu
  let menuClickItem = document.querySelector('.wrap > .menu');
  // 當漢堡被點擊時，加上class
  togglerItem.addEventListener('click', () => {
    togglerItem.classList.toggle('has_click');
    menuClickItem.classList.toggle('menu_click');
  });

  //----- 預覽按下按鈕後展開
  let reviewBtn = document.querySelectorAll('.review_btn');
  let reviewBox = document.querySelectorAll('.review');
  reviewBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      reviewBox[i].classList.toggle('review_open');
    });
  });

  //----- 改變預覽視窗的背景顏色
  menuBlock.forEach((item) => {
    if (item !== 'other') {
      // 抓到input
      let bgcSelector = document.querySelector('#selector_' + item);
      // 抓到預覽背景
      let inputBgcBlock = document.querySelector('#review_' + item + ' > .container');
      bgcSelector.addEventListener('input', function () {
        inputBgcBlock.style.setProperty('background-color', bgcSelector.value);
      });
    }
  });

  //----- 色碼轉rgba
  function colorToRgba(h, alpha) {
    // .charAt(i) 在字串中第i個字是什麼
    let noHash = h.charAt(0) == '#' ? h.substring(1, 7) : h;
    // 將16進位換成10進位制
    let hexToR = parseInt(noHash.substring(0, 2), 16);
    let hexToG = parseInt(noHash.substring(2, 4), 16);
    let hexToB = parseInt(noHash.substring(4, 6), 16);
    let rgbaColor = `rgba(${hexToR}, ${hexToG}, ${hexToB}, ${alpha})`;
    // 如果h跟alpha都不是空字串，回傳rgbaColor；如果alpha是空字串h不是，回傳h，否則回傳空字串
    return h && alpha ? rgbaColor : h && !alpha ? h : '';
  }

  //----- export按下按鈕的行動
  let exportArea = document.querySelector('#export_area');
  let inputBoxBeChange = document.querySelectorAll('.enter_block input');
  let clearBtn = document.querySelector('#clear');
  let selectBtn = document.querySelector('#select');
  let createBtn = document.querySelector('#create');
  // 只要有input發生變化，textarea就會被清除
  inputBoxBeChange.forEach((item) => {
    item.addEventListener('change', () => {
      exportArea.value = '';
    });
  });
  // 清除textarea
  clearBtn.addEventListener('click', () => {
    exportArea.value = '';
  });
  // 全選textarea
  selectBtn.addEventListener('click', () => {
    exportArea.select();
  });
  // 產生css
  createBtn.addEventListener('click', () => {
    exportArea.value = cssCreate();
  }); 

  //----- 判斷特殊情況
  let impArr = ['control_updatecount', 'control_filtercount', 'profile_private', 'profile_gift'];
  let ofhArr = ['plurkcnt_pimg', 'plurkbox_holder'];
  // 判斷important
  function importantDecide(name, review) {
    let check = impArr.includes(name[1]) && name[2] === 'c';
    return check && review ? 'important' : check && !review ? ' !important' : '';
  }
  // 判斷overflow
  function overflowDecide(name) {
    let check = ofhArr.includes(name[1]) && name[2] === 'bdrs';
    if (check) return [name[1], 'overflow', 'hidden'];
  }

  //----- 把no-empty跟data-need同時存在的區塊加上data-apply
  function setDataApply(inputs, box) {
    // 在該inputs裡是不是全部都有no-empty class
    // 是的話在外層加上data-apply
    const allNeed = inputs.every(input => input.classList.contains('no-empty'));
    box.dataset.apply = 'false';
    if (allNeed) box.dataset.apply = 'true';
  };
  function runNeedInpus(box) {
    // 把有data-need的input抓出來
    const needinputs = [...box.querySelectorAll('input[data-need="true"]')]; 
    // 偵聽所有的data-need input以及該input隔壁的input(color/range)
    needinputs.forEach(input => {
      box.dataset.apply = 'false';
      input.addEventListener('input', () => setDataApply(needinputs, box));
      const nextInput = input.nextElementSibling;
      if (nextInput) nextInput.addEventListener('input', () => setDataApply(needinputs, box));
    });
  }
  
  //----- 把可以使用的value變成物件
  function noApplyNormalValue(values, result, key) {
    result[key] = [];
    values.forEach(value => {
      result[key].push(value.value);
    })
  }
  // 判斷data-apply並分別作個別事
  function catchAllValues(box, input, result, key) {
    // 抓到box裡所有text,radio input
    const normalValues = [...box.querySelectorAll('[type="text"], [type="radio"]:checked')];
    const checkboxValues =  box.querySelector('[type="checkbox"]');
    // 刪除之前的物件
    delete result[key];
    if (box.dataset.apply === 'true') {
      // 在如果有data-apply並等於'true'，那麼新增value陣列
      result[key] = [];
      normalValues.forEach(value => result[key].push(value.value));
    } else if (!box.dataset.apply) {
      // 如果沒有data-apply
      if (input.type === 'checkbox') {
        if (checkboxValues.checked) result[key] = true
      } else noApplyNormalValue(normalValues, result, key);
    }
  }
  // 抓到box裡的input並偵聽input事件
  function createValueResult(box, result) {
    const allInputs = box.querySelectorAll('input');
    allInputs.forEach(input => {
      input.addEventListener('input', () => {
        const name = allInputs[0].name;
        catchAllValues(box, input, result, name);
      });
    });
  }
  // valueResult完成
  const allInputBoxes = document.querySelectorAll('.enter_block .input_box');
  const valueResult = {};
  allInputBoxes.forEach(box => {
    runNeedInpus(box);
    createValueResult(box, valueResult);
  });

  // ===== get cssFunction ============================================================
  let cssFunction = {
    bgc: (name) => `${colorToRgba(valueResult[`${name}_bgc`][0], valueResult[`${name}_bgc`][1])}`,
    c: (name) => `${colorToRgba(valueResult[`${name}_c`][0], valueResult[`${name}_c`][1])}`,
    fz: (name) => `${valueResult[`${name}_fz`][0]}px`,
    opa: (name) => `${valueResult[`${name}_opa`][0]}`,
    bdrs: (name) => `${valueResult[`${name}_bdrs`][0]}${valueResult[`${name}_bdrs`][1]}`,
    bd: (name) => `${valueResult[`${name}_bd`][1]}px solid ${valueResult[`${name}_bd`][0]}`,
    sha: (name) => `${valueResult[`${name}_sha`][2]}px ${valueResult[`${name}_sha`][2]}px ${valueResult[`${name}_sha`][3]}px ${colorToRgba(valueResult[`${name}_sha`][0], valueResult[`${name}_sha`][1])}`,
    dp: () => 'none',
    blur: (name) => `blur(${valueResult[`${name}_blur`][0]}px)`,
    posi: {
      get: (name) => {
          const value = valueResult[`${name}_posi`];
          console.log(value)
          let result = [];
          if (value[0] !== '') result.push(['top', `${value[0]}%`]);
          if (value[1] !== '') result.push(['left', `${value[1]}%`]);
          return result;
      },
    },
    size: {
      get: (name) => {
        return [['width', `${valueResult[`${name}_size`][0]}px`], ['height', `${valueResult[`${name}_size`][1]}px`]];
      },
    },
    dcbgi: {
      get: (name) => {
          let result = [
            ['content', `''`], 
            ['position', 'absolute'], 
            ['display', 'block'], 
            ['background-repeat', 'no-repeat']
          ];
          result.push(['background-image', `url('${valueResult[`${name}_dcbgi`][0]}')`]);
          return result;
      },
    },
    pcoinbgi: {
      get: (name) => {
          let result = [
            ['content', `''`], 
            ['position', 'absolute'], 
            ['display', 'block'], 
            ['bottom', '0'], 
            ['left', '0'], 
            ['transform', 'translateX(-100%)'], 
            ['background-position', 'bottom right'], 
            ['background-repeat', 'no-repeat']
          ];
          result.push(['background-image', `url('${valueResult[`${name}_pcoinbgi`][0]}')`]);
          return result;
      },
    },
    tlbgi: {
      get: (name) => {
          let result = [
            ['background-image', `url('${valueResult[`${name}_tlbgi`][0]}')`], 
            cssFunction['tlbgirep'](name), 
            cssFunction['tlbgiposi'](name)
          ];
          return result;
      },
    },
    tlbgirep:{
      get: (name) => {
          return valueResult[`${name}_tlbgirep`] ? ['background-repeat', `repeat-x`] : ['background-repeat', `no-repeat`];
      },
    },
    tlbgiposi:{
      get: (name) => {
          let value = valueResult[`${name}_tlbgiposi`] ? valueResult[`${name}_tlbgiposi`][0] : '';
          let check = value !== '' ? ` ${value}%` : '';
          return ['background-position', `bottom left${check}`];
      },
    },
    up:{
      get: () => [
          ['position', 'absolute'], 
          ['transform', 'translate(-25px, -150%)']
        ],
      set: () => ['position', 'transform'],
    },
    boxup:{
      get: () => `/* 噗內暱稱上移 */
#form_holder .plurk_cnt .td_qual {
  position: absolute;
}
#form_holder .plurk_cnt .text_holder {
  margin-top: 1.5em;
  padding-left: 0.7em;
}
`,
      set: () => ['fh', 'plurkbox_upname'],
    },
    open: {
      get: (name) => {
          let value = valueResult[`${name}_open`][0];
          if (value === 'top') return `/* 頻道向上展開 */
#filter_tab a, #filter_tab:hover a.no_unread {
  height: 25px;
  margin-top: 6px;
  margin-right: 6px;
}
`;
        if (value === 'right') return `/* 頻道向右展開 */
#filter_tab a, #filter_tab:hover a.no_unread {
  height: 25px;
  margin-top: 6px;
  margin-right: 6px;
}
#filter_tab li {
  clear: none;
  width: auto;
}
`;
      },
      set: (name) => {
        let value = valueResult[`${name}_open`][0];
        if (value === 'top') return ['tc', 'filter_open_top', 'filter_open_right', 'no'];
        if (value === 'right') return ['tc', 'filter_open_right', 'filter_open_top', 'no'];
        return ['tc', 'no', 'filter_open_right', 'filter_open_top'];
      },
    },
    ftposi: {
      get : (name) => {
          let value = valueResult[`${name}_ftposi`][0];
          if (value === 'right') return `/* 頻道往右放 */
.timeline_control {margin-left: 0;}
#timeline_control_holder {width: 100%;}
#updater {left: 10px;}
#filter_tab {padding-right: 20px;}
`;
      },
      set: (name) => {
        let value = valueResult[`${name}_ftposi`][0];
        if (value === 'right') return ['tc', 'filter_posi_right', 'no'];
        return ['tc', 'no', 'filter_posi_right'];
      },
    },
    toicon: {
      get: (name) => {
          return `/* 頻道圖示化 */
#filter_tab li {position: relative;}
#filter_tab a {
  width: 30px;
  padding: 0;
  overflow: hidden;
}
#filter_tab a i {
  float: left;
  width: 30px;
  line-height: 25px;
}
#filter_tab a i::before {width: 30px;}
` + cssFunction['countposi'].get(name);
      },
      set: (name) => cssFunction['countposi'].set(name),
    },
    countposi: {
      get: (name) => {
          let value = valueResult[`${name}_countposi`] || '';
          if (value[0] === 'left') return `/* 讓頻道未讀數字出現在左邊 */
#filter_tab a .unread_generic {
  position: absolute;
  top: 0;
  left: -30px;
  width: 30px;
  height: 25px;
  line-height: 25px;
  margin-top: 6px;
  margin-left: 0;
  padding: 0 4px;
  border-radius: 5px;
}
`;
          if (value[0] === 'top') return `/* 讓頻道未讀數字出現在上面 */
#filter_tab a .unread_generic {
  position: absolute;
  top: -14px;
  left: 0;
  width: 30px;
  height: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  border-radius: 5px;
}
`;
          return `/* 讓頻道未讀數字出現在右邊 */
#updater {margin-left: 30px;}
#filter_tab a .unread_generic {
  position: absolute;
  top: 0;
  left: 30px;
  width: 30px;
  height: 25px;
  line-height: 25px;
  margin-top: 6px;
  margin-left: 0;
  padding: 0 4px;
  border-radius: 5px;
}
`;
      },
      set: (name) => {
        let value = valueResult[`${name}_countposi`] || '';
        if (value[0] === 'left') return ['tc', 'filter_count_left', 'filter_count_top', 'filter_count_right'];
        if (value[0] === 'top') return ['tc', 'filter_count_top', 'filter_count_left', 'filter_count_right'];
        return ['tc', 'filter_count_right', 'filter_count_top', 'filter_count_left'];
      },
    },
  }

  // ===== css生成部分 ============================================================
  //----- valueResult處理成CSS陣列
  const lists = plurkCntList.concat(plurkCntList, plurkBoxList, controlList, dashboardLeftList, dashboardRightList, otherList);
  const useableList = ['bgc', 'c', 'fz', 'opa', 'bd', 'bdrs', 'sha', 'dp', 'blur'];
  const specialList = ['posi', 'size', 'dcbgi', 'tlbgi', 'pcoinbgi', 'up'];
  const complexList = ['boxup', 'open', 'ftposi', 'toicon'];
  const nameRegex = /(\w+_\w+)_(\w+)/i;
  function useableCss(name, result) {
    if (useableList.includes(name[2])) {
      let getCss = cssFunction[name[2]](name[1]) + importantDecide(name);
      result.push([name[1], `${cssList[name[2]].css}: ${getCss};`]);
      if (overflowDecide(name)) {
        let [tag, ...overflow] = overflowDecide(name);
        result.push([tag, overflow.join(': ') + ';']);
      }
    };
  }
  function specialCss(name, result) {
    if (specialList.includes(name[2])) {
      let getCss = cssFunction[name[2]].get(name[1]);
      getCss.forEach(css => result.push([name[1], css.join(': ') + ';']));
    }
  };
  function complexCss(name) {
    if (complexList.includes(name[2])) {
      return cssFunction[name[2]].get(name[1]);
    }
  };
  function toCSS(keyName) {
    const result = [];
    keyName.forEach(name => {
      useableCss(name, result);
      specialCss(name, result);
    });
    result.filter(css => css !== undefined);
    return result;
  }
  // 產生CSS
  function preCss(result, keyName) {
    let comment = `/**======== Create by Plurk CSS Generator ========**/
/**== https://hoshikata.github.io/PlurkCSSGenerator ==**/

`;
    let preCSS = '';
    preCSS += keyName
      .map(name => complexCss(name))
      .filter(css => css !== undefined)
      .join('');
    const resultKey = Object.keys(result);
    Object.values(result).forEach((value, i) => {
      let [title, ...css] = value;
      let content = css.map(content => `  ${content}
`).join('');
      preCSS += `/*${title}*/
${resultKey[i]} {
${content}}
`;
    });
    if (preCSS !== '') preCSS = comment + preCSS;
    return preCSS;
  }
  // 最終CSS
  function cssCreate() {
    const keyName = Object.keys(valueResult).map(key => key.match(nameRegex));
    let sameName = '';
    const result = {};
    [...toCSS(keyName)].forEach(css => {
      lists.forEach(content => {if (content.name === css[0]) css[0] = [content.title, content.subtitle]});
      if (css[0][1] !== sameName) {
        sameName = css[0][1];
        result[sameName] = [css[0][0]];
      }
      result[sameName].push(css[1]);
    });
    return preCss(result, keyName);
  }

  // ===== 預覽製作部分 ============================================================
  //----- review的處理
  function useableReview(name, reviewBox) {
    if (useableList.includes(name[2])) {
      if (name[3]) {
        let getCss = cssFunction[name[2]](name[1]);
        reviewBox.style.setProperty(cssList[name[2]].css, getCss, importantDecide(name, true));
        if (overflowDecide(name)) {
          let [tag, ...overflow] = overflowDecide(name);
          reviewBox.style.setProperty(overflow[0], overflow[1]);
        }
      } else {
        reviewBox.style.setProperty(cssList[name[2]].css, '');
        if (overflowDecide(name)) {
          let [tag, ...overflow] = overflowDecide(name);
          reviewBox.style.setProperty(overflow[0], '');
        }
      }
    }
  }
  function specialReview(name, reviewBox) {
    if (name[2] === 'up') {
      if (name[3]) {
        let getCss = cssFunction[name[2]].get(name[1]);
        getCss.forEach(css => {
          reviewBox.style.setProperty(css[0], css[1]);
        })
      } else {
        let setCss = cssFunction[name[2]].set(name[1]);
        setCss.forEach(css => {
          reviewBox.style.setProperty(css, '');
        })
      }
    }
  }
  function complexReview(name) {
    if (complexList.concat('countposi').includes(name[2])) {
      let [dom, setCss, ...otherCss] = cssFunction[name[2]].set(name[1]);
      let [tag, ...removeCss] = cssFunction[name[2]].set(name[1]);
      let box = document.querySelector(`#review_${dom}`);
      if (name[3]) {
        otherCss.forEach(css => box.classList.remove(css));
        box.classList.add(setCss);
      } else {
        removeCss.forEach(css => box.classList.remove(css));
      }
    }
  }
  // 判斷這次跟上次的valueResult哪裡不同
  let prevValueResult = {};
  function processKeyName() {
    const valueResultKeys = Object.keys(valueResult);
    const prevValueResultKeys = Object.keys(prevValueResult);
    let after = [false];
    // 哪些值被刪除
    prevValueResultKeys.forEach(prev => {
      if (!valueResult[prev]) {
        after = [prev, false];
        delete prevValueResult[prev];
      }
    });
    // 哪些值被更新
    valueResultKeys.forEach(now => {
      if (!prevValueResult[now] || valueResult[now] !== prevValueResult[now]) {
        after = [now, true];
        prevValueResult[now] = valueResult[now];
      }
    });
    if (after[0]) return after[0].match(nameRegex).concat([after[1]]);
  }
  // 只要input的有動作就更新預覽
  const allInputs = document.querySelectorAll('.enter_block input');
  allInputs.forEach(input => input.addEventListener('input', () => {
    const keyName = processKeyName();
    if (!keyName) return;
    lists.forEach(content => {
      if (content.name === keyName[1]) keyName.push(content.subtitle);
    })
    const reviewBox = document.querySelectorAll(`.review ${keyName[4]}`);
    reviewBox.forEach(box => {
      useableReview(keyName, box);
      specialReview(keyName, box);
    })
    complexReview(keyName);
  }));

  //
}
