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
      unit: ['px', '%'],
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
    pcoinbgi: {
      css: 'background-image',
      title: '背景圖',
    },
    blur: {
      css: 'filter: blur()',
      title: '模糊化',
      value: [0, 5, 1],
    },
    open: {
      css: '',
      title: '頻道展開',
    },
    up: {
      css: '',
      title: '上移',
    },
    boxup: {
      css: '',
      title: '上移',
    },
    ftposi: {
      css: '',
      title: '頻道位置',
    },
    toicon: {
      css: '',
      title: '圖示化',
    },
    countposi: {
      css: '',
      title: '圖示化的未讀位置',
    },
  };
  // input與label的html內容
  let plurkCntList = {
    normal: {
      title: '噗首的普通外觀',
      subtitle: '.timeline-cnt .plurk_cnt',
      name: 'plurkcnt_normal',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    hover: {
      title: '噗首被滑鼠移至的外觀',
      subtitle: '.timeline-cnt .link_extend .plurk_cnt',
      name: 'plurkcnt_hover',
      csstype: ['opa'],
    },
    extend: {
      title: '噗首被展開後的外觀',
      subtitle: '.timeline-cnt .plurk_box .plurk_cnt',
      name: 'plurkcnt_extend',
      csstype: ['opa'],
    },
    r18: {
      title: 'R18的噗首外觀',
      subtitle: '.timeline-cnt .porn:not(.link_extend) .text_holder',
      name: 'plurkcnt_r18',
      csstype: ['blur'],
    },
    pimg: {
      title: '噗首的頭像',
      subtitle: '.timeline-cnt .p_img',
      name: 'plurkcnt_pimg',
      csstype: ['opa', 'bdrs', 'bd', 'sha'],
      hidden: true,
    },
    count: {
      title: '噗的回應數',
      subtitle: '.timeline-cnt .response_count',
      name: 'plurkcnt_count',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    newcount: {
      title: '噗的未讀回應數',
      subtitle: '.timeline-cnt .new .response_count',
      name: 'plurkcnt_newcount',
      csstype: ['bgc', 'c', 'opa'],
    },
    pname: {
      title: '噗友暱稱',
      subtitle: '.timeline-cnt .td_qual > span',
      name: 'plurkcnt_pname',
      csstype: ['up'],
    },
    pic: {
      title: '噗的圖片',
      subtitle: '.timeline-cnt .plurk_cnt a.pictureservices',
      name: 'plurkcnt_pic',
      csstype: ['opa', 'bdrs', 'sha'],
    },
    piclink: {
      title: '噗的有圖連結',
      subtitle: '.timeline-cnt .plurk_cnt a.meta',
      name: 'plurkcnt_piclink',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd'],
    },
    piclinkimg: {
      title: '噗的有圖連結內的圖片',
      subtitle: '.timeline-cnt .plurk_cnt a.meta img',
      name: 'plurkcnt_piclinkimg',
      csstype: ['opa', 'bdrs'],
    },
    link: {
      title: '噗的普通連結',
      subtitle: '.timeline-cnt .plurk_cnt a.ex_link',
      name: 'plurkcnt_link',
      csstype: ['c', 'fz'],
    },
    plurktime: {
      title: '噗的時間顯示',
      subtitle: '.timeline-timeshow',
      name: 'timeline_plurktime',
      csstype: ['bgc', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    time: {
      title: '時間軸的時間',
      subtitle: '.bottom_start',
      name: 'timeline_time',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    line: {
      title: '時間軸的線',
      subtitle: '#bottom_line',
      name: 'timeline_line',
      csstype: ['bgc', 'opa'],
    },
  };
  let plurkBoxList = {
    holder: {
      title: '噗內整體調整',
      subtitle: '#form_holder',
      name: 'plurkbox_holder',
      csstype: ['opa', 'bdrs', 'bd', 'sha'],
      hidden: true,
    },
    favorite: {
      title: '噗內喜歡數',
      subtitle: '.favorite_count',
      name: 'plurkbox_favorite',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    replurk: {
      title: '噗內轉噗數',
      subtitle: '.replurk_count',
      name: 'plurkbox_replurk',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    bookmark: {
      title: '噗內書籤標籤',
      subtitle: '.bookmark_info',
      name: 'plurkbox_bookmark',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    private: {
      title: '噗內私噗標籤',
      subtitle: '.private_info',
      name: 'plurkbox_private',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    resbox: {
      title: '噗內回應區',
      subtitle: '.response_box',
      name: 'plurkbox_resbox',
      csstype: ['bgc'],
    },
    reslist: {
      title: '回應內容',
      subtitle: '.response_box .list .plurk_cnt',
      name: 'plurkbox_reslist',
      csstype: ['bgc', 'c', 'fz', 'bdrs', 'bd'],
    },
    ownlist: {
      title: '噗主回應內容',
      subtitle: '.response_box .list .highlight_owner .plurk_cnt',
      name: 'plurkbox_ownlist',
      csstype: ['bgc', 'c', 'fz', 'bdrs', 'bd'],
    },
    listname: {
      title: '噗內暱稱上移',
      subtitle: '#form_holder .plurk_cnt .td_qual',
      name: 'plurkbox_listname',
      csstype: ['boxup'],
    },
    form: {
      title: '噗內輸入區',
      subtitle: '.plurk_box .mini_form',
      name: 'plurkbox_form',
      csstype: ['bgc'],
    },
  };
  let controlList = {
    updatebtn: {
      title: '更新的按鈕',
      subtitle: '#updater .item a',
      name: 'control_updatebtn',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    updatecount: {
      title: '更新的未讀數字',
      subtitle: '#updater .unread_generic',
      name: 'control_updatecount',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    filterstyle: {
      title: '頻道的型態',
      subtitle: '#filter_tab',
      name: 'control_filterstyle',
      csstype: ['open', 'ftposi', 'toicon', 'countposi'],
    },
    filterbtn: {
      title: '頻道的普通按鈕',
      subtitle: '#filter_tab a',
      name: 'control_filterbtn',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    filterselect: {
      title: '頻道的選中按鈕',
      subtitle: '#filter_tab a.filter_selected',
      name: 'control_filterselect',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    filtercount: {
      title: '頻道的未讀數字',
      subtitle: '#filter_tab a .unread_generic',
      name: 'control_filtercount',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
  };
  let dashboardLeftList = {
    board: {
      title: '主控台整體',
      subtitle: '#plurk-dashboard',
      name: 'dashboard_board',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    segment: {
      title: '主控台內分區',
      subtitle: '.dash-segment .segment-content',
      name: 'dashboard_segment',
      csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    },
    profile: {
      title: '個人資料區整體',
      subtitle: '.dash-segment-profile .segment-content',
      name: 'profile_segment',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    img: {
      title: '個人頭像',
      subtitle: '#plurk-dashboard .dash-group-left #dash-profile img.profile-pic',
      name: 'profile_img',
      csstype: ['opa', 'bdrs', 'sha'],
    },
    name: {
      title: '個人暱稱',
      subtitle: '#plurk-dashboard .dash-group-left #dash-profile #full_name .display_name',
      name: 'profile_name',
      csstype: ['c', 'fz', 'opa'],
    },
    private: {
      title: '私噗按鈕',
      subtitle: '.friend_man.private_plurk',
      name: 'profile_private',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs'],
    },
    gift: {
      title: '送禮按鈕',
      subtitle: '.friend_man.send_gift',
      name: 'profile_gift',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs'],
    },
  };
  let dashboardRightList = {
    post: {
      title: '發噗區整體',
      subtitle: '.dash-segment-post .segment-content',
      name: 'post_segment',
      csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    },
    submit: {
      title: '發噗按鈕',
      subtitle: '.submit_img_color',
      name: 'post_submit',
      csstype: ['bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    stats: {
      title: '卡碼資訊區整體',
      subtitle: '.dash-segment-stats .segment-content',
      name: 'stats_segment',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    fzcolor: {
      title: '統計資訊',
      subtitle: '#plurk-dashboard .dash-segment #dash-stats table td',
      name: 'stats_fzcolor',
      csstype: ['c', 'fz'],
    },
    karma: {
      title: '卡碼',
      subtitle: '.dash-stats-karma',
      name: 'stats_karma',
      csstype: ['dp'],
    },
    friends: {
      title: '好友區整體',
      subtitle: '.dash-segment-friends .segment-content',
      name: 'friends_segment',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    fans: {
      title: '紛絲區整體',
      subtitle: '.dash-segment-fans .segment-content',
      name: 'fans_segment',
      csstype: ['dp', 'bgc', 'c', 'fz', 'opa', 'bdrs', 'bd', 'sha'],
    },
    img: {
      title: '好友粉絲頭像整體',
      subtitle: '.friend_holder img',
      name: 'friends_img',
      csstype: ['opa', 'bdrs', 'sha'],
    },
    friendbtn: {
      title: '好友按鈕',
      subtitle: '#dash-friends .friend_man',
      name: 'friends_friendbtn',
      csstype: ['dp'],
    },
    friendlink: {
      title: '好友連結',
      subtitle: '#dash-friends .show_all_friends, #dash-friends .show_mutual_friends',
      name: 'friends_friendlink',
      csstype: ['dp'],
    },
    friendimg: {
      title: '好友頭像',
      subtitle: '#dash-friends .friend_holder',
      name: 'friends_friendimg',
      csstype: ['dp'],
    },
    fanbtn: {
      title: '粉絲按鈕',
      subtitle: '#dash-fans .friend_man',
      name: 'fans_fanbtn',
      csstype: ['dp'],
    },
    fanlink: {
      title: '粉絲連結',
      subtitle: '#dash-fans .show_all_friends',
      name: 'fans_fanlink',
      csstype: ['dp'],
    },
    fanimg: {
      title: '粉絲頭像',
      subtitle: '#dash-fans .friend_holder',
      name: 'fans_fanimg',
      csstype: ['dp'],
    },
    award: {
      title: '徽章區',
      subtitle: '#plurk-dashboard .dash-segment-award',
      name: 'award_segment',
      csstype: ['dp'],
    },
  };
  let otherList = {
    dynamic: {
      title: '噗浪生物',
      subtitle: '#dynamic_logo::after',
      name: 'dynamic_ori',
      csstype: ['dcbgi', 'size', 'posi', 'opa'],
    },
    creature: {
      title: '官方生物',
      subtitle: '#dynamic_logo #creature',
      name: 'dynamic_creature',
      csstype: ['opa'],
    },
    tlbg: {
      title: '時間軸生物',
      subtitle: '.timeline-bg',
      name: 'tl_bg',
      csstype: ['tlbgi', 'tlbgirep', 'tlbgiposi'],
    },
    pcoin: {
      title: '噗幣旁生物',
      subtitle: '.profile-icons::before',
      name: 'pcoin',
      csstype: ['pcoinbgi', 'size', 'opa'],
    },
  };
  // contentList的物件名稱變成陣列
  let contentList = [plurkCntList, plurkBoxList, controlList, dashboardLeftList, dashboardRightList, otherList];
  // menu列表
  let menuBlock = ['th', 'fh', 'tc', 'dhl', 'dhr', 'other'];
  // 判斷什麼屬性要用 !important
  let impArr = ['#updater .unread_generic', '#filter_tab a .unread_generic', '.friend_man.private_plurk', '.friend_man.send_gift'];
  // 判斷什麼屬性要用 overflow: hidden
  let ofhArr = ['.timeline-cnt .p_img', '#form_holder'];

  // ===== html生成部分 ============================================================
  //----- input跟label html生成
  function inputBoxHtml(item, inner) {
    return `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${inner}
    </div>
    `;
  }
  // 各種input type的css
  function colorHtml(name, csstype, ph = '') {
    return `
    <div class="row m-0">
      <input class="${name}_${csstype} colorBox" type="text" name="${csstype}" placeholder="${ph}" />
      <input class="colorBox" type="color" />
    </div>
    `;
  }
  function rangeHtml(name, csstype, valueArr, ph = '') {
    return `
    <div class="row m-0">
      <input class="${name}_${csstype} rangeBox" type="text" name="${csstype}" placeholder="${ph}" />
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
  //  把判斷是什麼類型的csstype獨立出並依樣式呼叫各種input type的function，最後回傳preHtml
  function preHtmlSwitch(key, item) {
    let typeCheck = item === 'dp' || item === 'tlbgirep' || item === 'up' || item === 'boxup' || item === 'toicon';
    let preHtml = typeCheck ? inputBoxHtml(item, checkHtml(key.name, item)) : '';
    return preHtml;
  }
  function preHtmlRange(key, item) {
    let typeCheck = item === 'fz' || item === 'opa' || item === 'blur';
    let preHtml = typeCheck ? inputBoxHtml(item, rangeHtml(key.name, item, cssList[item].value)) : '';
    return preHtml;
  }
  function preHtmlBgc(key, item) {
    let typeCheck = item === 'bgc' || item === 'c';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      ${colorHtml(key.name, item, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].alpha, '透明')}
    `) : '';
    return preHtml;
  }
  function preHtmlBdrs(key, item) {
    let typeCheck = item === 'bdrs';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      ${rangeHtml(key.name, item, cssList[item].value)}
      <div class="row m-0">
        <span class="radioBox">單位</span>
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="px" checked>
        <label for="${key.name}_${item}_1" class="radioBox">PX</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="%">
        <label for="${key.name}_${item}_2" class="radioBox">%</label>
      </div>
    `) : '';
    return preHtml;
  }
  function preHtmlBd(key, item) {
    let typeCheck = item === 'bd';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      ${colorHtml(key.name, item, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].value, '粗細')}
    `) : '';
    return preHtml;
  }
  function preHtmlSha(key, item) {
    let typeCheck = item === 'sha';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      ${colorHtml(key.name, item, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].alpha, '透明')}
      ${rangeHtml(key.name, item, cssList[item].value, '距離')}
      ${rangeHtml(key.name, item, cssList[item].blur, '模糊')}
    `) : '';
    return preHtml;
  }
  function preHtmlPosi(key, item) {
    let typeCheck = item === 'posi';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      ${rangeHtml(key.name, item, cssList[item].top, '上方')}
      ${rangeHtml(key.name, item, cssList[item].left, '左方')}
    `) : '';
    return preHtml;
  }
  function preHtmlSize(key, item) {
    let typeCheck = item === 'size';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      <div class="row m-0">
        <input class="${key.name}_${item}" type="text" name="${item}" placeholder="寬度">
      </div>
      <div class="row m-0">
        <input class="${key.name}_${item}" type="text" name="${item}" placeholder="高度">
      </div>
    `) : '';
    return preHtml;
  }
  function preHtmlBgi(key, item) {
    let typeCheck = item === 'dcbgi' || item === 'tlbgi' || item === 'pcoinbgi';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      <div class="row m-0">
        <input class="${key.name}_${item}" type="text" name="${item}" placeholder="圖片網址">
      </div>
    `) : '';
    return preHtml;
  }
   function preHtmlBgiposi(key, item) {
    let typeCheck = item === 'tlbgiposi';
    let preHtml = typeCheck ? inputBoxHtml(item, rangeHtml(key.name, item, cssList[item].left, '左方')) : '';
    return preHtml;
  }
  function preHtmlOpen(key, item) {
    let typeCheck = item === 'open';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      <div class="row m-0">
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="no" checked>
        <label for="${key.name}_${item}_1" class="radioBox">不展開</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="top">
        <label for="${key.name}_${item}_2" class="radioBox">向上</label>
        <input id="${key.name}_${item}_3" class="radioBox" type="radio" name="${key.name}_${item}" value="right">
        <label for="${key.name}_${item}_3" class="radioBox">向右</label>
      </div>
    `) : '';
    return preHtml;
  }
  function preHtmlFtposi(key, item) {
    let typeCheck = item === 'ftposi';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      <div class="row m-0">
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="no" checked>
        <label for="${key.name}_${item}_1" class="radioBox">原處</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="right">
        <label for="${key.name}_${item}_2" class="radioBox">往右放</label>
      </div>
    `) : '';
    return preHtml;
  }
  function preHtmlCountposi(key, item) {
    let typeCheck = item === 'countposi';
    let preHtml = typeCheck ? inputBoxHtml(item, `
      <div class="row m-0">
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="right" checked disabled>
        <label for="${key.name}_${item}_1" class="radioBox">右邊</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="left" disabled>
        <label for="${key.name}_${item}_2" class="radioBox">左邊</label>
        <input id="${key.name}_${item}_3" class="radioBox" type="radio" name="${key.name}_${item}" value="top" disabled>
        <label for="${key.name}_${item}_3" class="radioBox">上面</label>
      </div>
    `) : '';
    return preHtml;
  }
  // 巡迴各物件後，將preHtml加到resultHtml上
  function blockHtmlCreate(obj, blockArr) {
    // 創一個變數裝所有html的內容
    let resultHtml = '';
    for (let key in obj) {
      // 找csstype的部分
      let cssType = obj[key].csstype;
      // 先創一個變數來裝巡迴後的陣列內容跟Html
      let preHtml = '';
      // 巡迴陣列產生html加到preHtml
      cssType.forEach((item) => {
        // 加上各個preHtml
        preHtml += preHtmlSwitch(obj[key], item);
        preHtml += preHtmlRange(obj[key], item);
        preHtml += preHtmlBgc(obj[key], item);
        preHtml += preHtmlBdrs(obj[key], item);
        preHtml += preHtmlBd(obj[key], item);
        preHtml += preHtmlSha(obj[key], item);
        preHtml += preHtmlPosi(obj[key], item);
        preHtml += preHtmlSize(obj[key], item);
        preHtml += preHtmlBgi(obj[key], item);
        preHtml += preHtmlBgiposi(obj[key], item);
        preHtml += preHtmlOpen(obj[key], item);
        preHtml += preHtmlFtposi(obj[key], item);
        preHtml += preHtmlCountposi(obj[key], item);
      });
      // input跟結尾標籤的html
      // 呼叫preHtml
      resultHtml += `
    <div id="${obj[key].name}" class="container">
      <h2 data-selector="${obj[key].subtitle}">${obj[key].title}</h2>
      <div class="row m-0">
        ${preHtml}
      </div>
    </div>
    `;
    }
    // 抓到生產Html的區塊後加上resultHtml
    document.querySelector(blockArr + ' .enter_block').innerHTML = resultHtml;
  }

  //----- 建立子選單
  function subMenuCreate(obj, blockArr, menuArr) {
    let resultMenu = '';
    let preMenu = '';
    let reviewMenu = `<li class="item"><a href="#review_${menuArr}" class="review_btn">預覽</a></li>`;
    for (let key in obj) {
      preMenu += `<li class="item"><a href="#${obj[key].name}">${obj[key].title}</a></li>`;
    }
    if (obj !== otherList) resultMenu += `<ul class="menu_list">${reviewMenu}${preMenu}</ul>`;
    else resultMenu += `<ul class="menu_list">${preMenu}</ul>`;
    document.querySelector(blockArr + ' .menu_sub').innerHTML = resultMenu;
  }

  //----- 巡迴menuBlock讓blockHtmlCreate跟subMenuCreate的內容加上各自的contentList
  contentList.forEach((item, i) => {
    blockHtmlCreate(item, '#' + menuBlock[i] + '_block');
    subMenuCreate(item, '#' + menuBlock[i] + '_block', menuBlock[i]);
  });

  // ===== 其他功能 ============================================================
  //----- 如果圖示化yes則讓未讀位置可操作
  // 抓到圖示化的checkbox
  let toIconCheckBox = document.querySelector('[name="control_filterstyle_toicon"]');
  let countPosiBox = document.querySelectorAll('[name="control_filterstyle_countposi"]');
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
    item.addEventListener('change', () => {
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

  // ===== css生成部分 ============================================================
  //----- 色碼轉rgba
  function colorToRgba(h = '', alpha = '') {
    // .charAt(i) 在字串中第i個字是什麼
    let noHash = h.charAt(0) == '#' ? h.substring(1, 7) : h;
    // 將16進位換成10進位制
    let hexToR = parseInt(noHash.substring(0, 2), 16);
    let hexToG = parseInt(noHash.substring(2, 4), 16);
    let hexToB = parseInt(noHash.substring(4, 6), 16);
    let rgbaColor = `rgba(${hexToR}, ${hexToG}, ${hexToB}, ${alpha})`;
    // 如果h跟alpha都不是空字串，回傳rgbaColor；如果alpha是空字串h不是，回傳h，否則回傳空字串
    return h !== '' && alpha !== '' ? rgbaColor : h !== '' && alpha === '' ? h : '';
  }

  //----- 抓並產生css
  // 把判斷是什麼類型的css並加上code的部分搬出來
  function preCssBgc(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'bgc' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: ${colorToRgba(inputBox[0].value, inputBox[1].value)};
`;
    return preCss;
  }
  function preCssC(item, inputBox, cssSubtitle) {
    // 判斷什麼屬性要用 !important
    let impDecide = impArr.some((item) => cssSubtitle === item);
    // 暫時儲存的變數
    let cssCheck = item === 'c' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck && impDecide) preCss = `  ${cssList[item].css}: ${colorToRgba(inputBox[0].value, inputBox[1].value)} !important;
`;
    else if (cssCheck) preCss = `  ${cssList[item].css}: ${colorToRgba(inputBox[0].value, inputBox[1].value)};
`;
    return preCss;
  }
  function preCssFz(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'fz' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: ${inputBox[0].value}px;
`;
    return preCss;
  }
  function preCssOpa(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'opa' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: ${inputBox[0].value};
`;
    return preCss;
  }
  function preCssBdrs(item, inputBox, radioValue) {
    // 暫時儲存的變數
    let cssCheck = item === 'bdrs' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: ${inputBox[0].value}${radioValue.value};
`;
    return preCss;
  }
  function preCssBd(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'bd' && inputBox[0].value !== '' && inputBox[1].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: ${inputBox[1].value}px solid ${inputBox[0].value};
`;
    return preCss;
  }
  function preCssSha(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'sha' && inputBox[0].value !== '' && inputBox[2].value !== '' && inputBox[3].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: ${inputBox[2].value}px ${inputBox[2].value}px ${inputBox[3].value}px ${colorToRgba(inputBox[0].value, inputBox[1].value)};
`;
    return preCss;
  }
  function preCssDp(item, displayValue) {
    // 暫時儲存的變數
    let cssCheck = item === 'dp' && displayValue.checked;
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: none;
`;
    return preCss;
  }
  function preCssPosi(item, inputBox) {
    // 暫時儲存的變數
    let preCss = '';
    if (item === 'posi' && inputBox[0].value !== '') preCss = `  top: ${inputBox[0].value}%;
`;
    if (item === 'posi' && inputBox[1].value !== '') preCss = `  left: ${inputBox[1].value}%;
`;
    return preCss;
  }
  function preCssSize(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'size' && inputBox[0].value !== '' && inputBox[1].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  width: ${inputBox[0].value}px;
  height: ${inputBox[1].value}px;
`;
    return preCss;
  }
  function preCssDcbgi(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'dcbgi' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  content: '';
  position: absolute;
  display: block;
  background-repeat: no-repeat;
  ${cssList[item].css}: url("${inputBox[0].value}");
`;
    return preCss;
  }
  function preCssTlbgi(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'tlbgi' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  ${cssList[item].css}: url("${inputBox[0].value}");
`;
    return preCss;
  }
  function preCssTlbgirep(item, displayValue) {
    // 抓到時間軸背景圖的value
    let tlbgiBox = document.querySelector('.tl_bg_tlbgi');
    // 暫時儲存的變數
    let cssCheck = item === 'tlbgirep' && tlbgiBox.value !== '';
    let preCss = '';
    if (cssCheck && displayValue.checked) preCss = `  ${cssList[item].css}: repeat-x;
`;
    else if (cssCheck && !displayValue.checked) preCss = `  ${cssList[item].css}: no-repeat;
`;
    return preCss;
  }
  function preCssTlbgiposi(item, inputBox) {
    // 抓到時間軸背景圖的value
    let tlbgiBox = document.querySelector('.tl_bg_tlbgi');
    // 暫時儲存的變數
    let cssCheck = item === 'tlbgiposi' && tlbgiBox.value !== '';
    let preCss = '';
    if (cssCheck && inputBox[0].value !== '') preCss = `  ${cssList[item].css}: bottom left ${inputBox[0].value}%;
`; 
    else if (cssCheck && inputBox[0].value === '') preCss = `  ${cssList[item].css}: bottom left 0%;
`;
    return preCss;
  }
  function preCssPcoinbgi(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'pcoinbgi' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  content: '';
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-repeat: no-repeat;
  background-position: bottom right;
  ${cssList[item].css}: url("${inputBox[0].value}");
`;
    return preCss;
  }
  function preCssBlur(item, inputBox) {
    // 暫時儲存的變數
    let cssCheck = item === 'blur' && inputBox[0].value !== '';
    let preCss = '';
    if (cssCheck) preCss = `  filter: blur(${inputBox[0].value}px);
`;
    return preCss;
  }
  function preCssUp(item, displayValue) {
    // 暫時儲存的變數
    let cssCheck = item === 'up' && displayValue.checked;
    let preCss = '';
    if (cssCheck) preCss = `  position: absolute;
  transform: translate(-25px, -150%);
`;
    return preCss;
  }
  // 判斷噗內暱稱上移的css
  function preCssBoxup() {
    // 抓到暱稱上移的開關狀態
    let boxupBox = document.querySelector('[name="plurkbox_listname_boxup"]');
    // 暫時儲存的變數
    let preCss = '';
    if (boxupBox.checked) preCss = `/* 噗內暱稱上移 */
#form_holder .plurk_cnt .td_qual {
  position: absolute;
}
#form_holder .plurk_cnt .text_holder {
  margin-top: 1.5em;
  padding-left: 0.7em;
}
`;
    return preCss;
  }
  // 判斷頻道展開的css
  function filterOpenResult() {
    // 抓到展開按鈕哪個被按到
    let filterOpenBox = document.querySelector('[name="control_filterstyle_open"]:checked');
    // 暫時儲存的變數
    let preCss = '';
    if (filterOpenBox.value === 'top') preCss = `/* 頻道向上展開 */
#filter_tab a, #filter_tab:hover a.no_unread {
  height: 25px;
  margin-top: 6px;
  margin-right: 6px;
}
`;
    if (filterOpenBox.value === 'right') preCss = `/* 頻道向右展開 */
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
    return preCss;
  }
  // 判斷頻道位置的css
  function filterPosiResult() {
    // 抓到位置按鈕哪個被按到
    let filterPosiBox = document.querySelector('[name="control_filterstyle_ftposi"]:checked');
    // 暫時儲存的變數
    let preCss = '';
    if (filterPosiBox.value === 'right') preCss = `/* 頻道往右放 */
.timeline_control {margin-left: 0;}
#timeline_control_holder {width: 100%;}
#updater {left: 10px;}
#filter_tab {padding-right: 20px;}
`;
    return preCss;
  }
  // 判斷頻道圖示化與未讀位置的css
  function filterCountResult() {
    // 抓到未讀位置按鈕哪個被按到
    let filterCountBox = document.querySelector('[name="control_filterstyle_countposi"]:checked');
    // 暫時儲存的變數
    let preCss = '';
    let filterToIconCss = `/* 頻道圖示化 */
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
`;
    let filterCountRight = `/* 讓頻道未讀數字出現在右邊 */
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
    let filterCountTop = `/* 讓頻道未讀數字出現在上面 */
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
    let filterCountLeft = `/* 讓頻道未讀數字出現在左邊 */
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
    if (toIconCheckBox.checked) {
      preCss = filterToIconCss + filterCountRight;
      if (filterCountBox.value === 'top') preCss = filterToIconCss + filterCountTop;
      if (filterCountBox.value === 'left') preCss = filterToIconCss + filterCountLeft;
    }
    return preCss;
  }
  // 巡迴各物件後，依類型生成css，並把preCss加到resultCss上
  function preCssCreate(obj) {
    // 創一個變數裝最終css
    let resultCss = '';
    for (let key in obj) {
      // 找csstype的部分
      let cssType = obj[key].csstype;
      // 找subtitle的部分
      let cssSubtitle = obj[key].subtitle;
      // 創一個變數裝巡迴css後產出的內容
      let preCss = '';
      cssType.forEach((item) => {
        // 抓住要擷取value的input
        let inputBox = document.querySelectorAll('input.' + obj[key].name + '_' + item);
        // 抓圓角單位
        let radioValue = document.querySelector('[name="' + obj[key].name + '_' + item + '"]:checked');
        // 抓隱藏 checked
        let displayValue = document.querySelector('[name="' + obj[key].name + '_' + item + '"]');
        // 加上各個preCss
        preCss += preCssBgc(item, inputBox);
        preCss += preCssC(item, inputBox, cssSubtitle);
        preCss += preCssFz(item, inputBox);
        preCss += preCssOpa(item, inputBox);
        preCss += preCssBdrs(item, inputBox, radioValue);
        preCss += preCssBd(item, inputBox);
        preCss += preCssSha(item, inputBox);
        preCss += preCssDp(item, displayValue);
        preCss += preCssPosi(item, inputBox);
        preCss += preCssDcbgi(item, inputBox);
        preCss += preCssSize(item, inputBox);
        preCss += preCssTlbgi(item, inputBox);
        preCss += preCssTlbgirep(item, displayValue);
        preCss += preCssTlbgiposi(item, inputBox);
        preCss += preCssPcoinbgi(item, inputBox);
        preCss += preCssBlur(item, inputBox);
        preCss += preCssUp(item, displayValue);
      });
      // 如果run出來的preCss不等於空字串時，再產生css
      if (preCss !== '') {
        if (obj[key].hidden) {
          preCss += `  overflow: hidden;
`;
        }
        resultCss += `/* ${obj[key].title} */
${obj[key].subtitle} {
${preCss}}
`;
      }
    }
    // 抓到textarea把resultCss放進去
    return resultCss;
  }
  // 巡迴contentList，讓每個分頁的css加再一起
  function cssCreate() {
    let info = '';
    let result = '';
    contentList.forEach((item) => {
      result += preCssCreate(item);
    });
    // 加上頻道型態的css
    let onlyCss = preCssBoxup() + filterOpenResult() + filterPosiResult() + filterCountResult();
    // 加上作者資訊跟result
    if (result !== '' || onlyCss !== '') {
      info = `/**======== Create by Plurk CSS Generator ========**/
/**== https://hoshikata.github.io/PlurkCSSGenerator ==**/

${onlyCss}${result}`;
    }
    return info;
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

  // ===== 預覽製作部分 ============================================================
  // 各個cssType對應review的前處理
  function preBgcReview(item, inputBox, reviewBox) {
    // 改變預覽的背景顏色
    if (item === 'bgc') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (inputBox[0].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, colorToRgba(inputBox[0].value, inputBox[2].value)));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preCReview(item, inputBox, reviewBox, cssSubtitle) {
    // 先判斷哪些要加上impoertant
    let impDecide = impArr.some((item) => cssSubtitle === item);
    // 改變預覽的文字顏色
    if (item === 'c') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (inputBox[0].value !== '' && impDecide) {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, colorToRgba(inputBox[0].value, inputBox[2].value), 'important'));
          } else if (inputBox[0].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, colorToRgba(inputBox[0].value, inputBox[2].value)));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preFzReview(item, inputBox, reviewBox) {
    // 改變預覽的透明度
    if (item === 'fz') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (inputBox[0].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, `${inputBox[0].value}px`));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preOpaReview(item, inputBox, reviewBox) {
    // 改變預覽的透明度
    if (item === 'opa') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (inputBox[0].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, inputBox[0].value));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preBdrsReview(item, inputBox, reviewBox, radioBox, cssSubtitle) {
    // 先判斷哪些要加上 overflow: hidden
    let ofhDecide = ofhArr.some((item) => cssSubtitle === item);
    // 判斷圓角輸入框不為空，px或%被選中
    if (item === 'bdrs') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          let unit = radioBox[0].checked ? radioBox[0].value : radioBox[1].checked ? radioBox[1].value : '';
          if (inputBox[0].value !== '') {
            reviewBox.forEach((review) => {
              review.style.setProperty(cssList[item].css, `${inputBox[0].value}${unit}`);
              if (ofhDecide) review.style.setProperty('overflow', 'hidden');
            });
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  // 判斷狀況後 setProperty
  function preBdReview(item, inputBox, reviewBox) {
    // 改變預覽的邊框
    if (item === 'bd') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (inputBox[0].value !== '' && inputBox[2].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, `${inputBox[2].value}px solid ${inputBox[0].value}`));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preShaReview(item, inputBox, reviewBox) {
    if(item === 'sha') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          // 改變預覽的陰影
          if (inputBox[0].value !== '' && inputBox[4].value !== '' && inputBox[6].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, `${inputBox[4].value}px ${inputBox[4].value}px ${inputBox[6].value}px ${colorToRgba(inputBox[0].value, inputBox[2].value)}`));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preDpReview(item, inputBox, reviewBox, displayBox) {
    // 如果displayBox有被checked，那display: none，否則不用
    if (item === 'dp') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (displayBox.checked) {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, 'none'));
          } else {
            reviewBox.forEach((review) => review.style.setProperty(cssList[item].css, ''));
          }
        })
      })
    }
  }
  function preBlurReview(item, inputBox, reviewBox) {
    // 改變R18的模糊度
    if (item === 'blur') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (inputBox[0].value !== '') {
            reviewBox.forEach((review) => review.style.setProperty('filter', 'blur(' + inputBox[0].value + 'px)'));
          } else {
            reviewBox.forEach((review) => review.style.setProperty('filter', ''));
          }
        })
      })
    }
  }
  function preUpReview(item, inputBox, reviewBox, displayBox) {
    // 如果displayBox有被checked，那display: none，否則不用
    // 巡迴要改變的預覽後並連動css
    if (item === 'up') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (displayBox.checked) {
            reviewBox.forEach((review) => {
              review.style.setProperty('position', 'absolute');
              review.style.setProperty('transform', 'translate(-25px, -150%)');
            });
          } else {
            reviewBox.forEach((review) => {
              review.style.setProperty('position', '');
              review.style.setProperty('transform', '');
            });
          }
        })
      })
    }
  }
  function preBoxNameUpReview(item, inputBox, displayBox) {
    let addListBox = document.querySelector('#review_fh');
    if (item === 'boxup') {
      displayBox.addEventListener('input', () => {
        if (displayBox.checked) {
          addListBox.classList.add('plurkbox_upname');
        } else {
          addListBox.classList.remove('plurkbox_upname');
        }
      });
    }
  }
  function preFilterOpenReview(item, inputBox, radioBox) {
    let addListBox = document.querySelector('#review_tc');
    if (item === 'open') {
      inputBox.forEach((box) => {
        box.addEventListener('input', () => {
          if (radioBox[1].checked) {
            addListBox.classList.remove('filter_open_right');
            addListBox.classList.add('filter_open_top');
          } else if (radioBox[2].checked) {
            addListBox.classList.remove('filter_open_top');
            addListBox.classList.add('filter_open_right');
          } else {
            addListBox.classList.remove('filter_open_top', 'filter_open_right');
          }
        });
      });
    }
  }
  function preFilterPosiReview(item, inputBox, radioBox) {
    let addListBox = document.querySelector('#review_tc');
    if (item === 'ftposi') {
      inputBox.forEach((box) => {
        box.addEventListener('change', () => {
          if (radioBox[1].checked) {
            addListBox.classList.add('filter_posi_right');
          } else {
            addListBox.classList.remove('filter_posi_right');
          }
        });
      });
    }
  }
  function preFilterCountHandler(radioBox) {
    let addListBox = document.querySelector('#review_tc');
    if (toIconCheckBox.checked && radioBox[0].checked) {
      addListBox.classList.remove('filter_count_left', 'filter_count_top');
      addListBox.classList.add('filter_count_right');
    } else if (toIconCheckBox.checked && radioBox[1].checked) {
      addListBox.classList.remove('filter_count_right', 'filter_count_top');
      addListBox.classList.add('filter_count_left');
    } else if (toIconCheckBox.checked && radioBox[2].checked) {
      addListBox.classList.remove('filter_count_right', 'filter_count_left');
      addListBox.classList.add('filter_count_top');
    } else {
      addListBox.classList.remove('filter_count_right', 'filter_count_left', 'filter_count_top');
    }
  };
  function preFilterCountReview(item, inputBox, radioBox) {
    if (item === 'countposi') {
      inputBox.forEach((box) => {
        toIconCheckBox.addEventListener('input', () => preFilterCountHandler(radioBox));
        box.addEventListener('input', () => preFilterCountHandler(radioBox));
      });
    }
  }
  // 巡迴各物件並判斷csstype類型後，依類型監聽input，再把產生的值傳進review進行連動
  function preCssReview(obj, menuArr) {
    for (let key in obj) {
      // 找csstype的部分
      let cssType = obj[key].csstype;
      // 找subtitle的部分
      let cssSubtitle = obj[key].subtitle;
      // 抓到review
      let reviewBox = document.querySelectorAll('#review_' + menuArr + ' ' + obj[key].subtitle);
      // 巡迴cssType
      cssType.forEach((item) => {
        // 抓到各cssType的inptu
        let inputBox = document.querySelectorAll('#' + obj[key].name + ' .' + item + ' input');
        // 抓圓角單位
        let radioBox = document.querySelectorAll('[name="' + obj[key].name + '_' + item + '"]');
        // 抓隱藏 checked
        let displayBox = document.querySelector('[name="' + obj[key].name + '_' + item + '"]');
        // 加入各個cssType對應review的前處理
        // 判斷狀況後巡迴要改變的預覽後並連動css
        preBgcReview(item, inputBox, reviewBox);
        preCReview(item, inputBox, reviewBox, cssSubtitle);
        preFzReview(item, inputBox, reviewBox);
        preOpaReview(item, inputBox, reviewBox);
        preBdrsReview(item, inputBox, reviewBox, radioBox, cssSubtitle);
        preBdReview(item, inputBox, reviewBox);
        preShaReview(item, inputBox, reviewBox);
        preDpReview(item, inputBox, reviewBox, displayBox);
        preBlurReview(item, inputBox, reviewBox);
        preUpReview(item, inputBox, reviewBox, displayBox);
        preBoxNameUpReview(item, inputBox, displayBox);
        preFilterOpenReview(item, inputBox, radioBox);
        preFilterPosiReview(item, inputBox, radioBox);
        preFilterCountReview(item, inputBox, radioBox);

      });
    }
  }
  // 巡迴contentList，讓每個分頁的預覽運作
  contentList.forEach((item, i) => {
    preCssReview(item, menuBlock[i]);
  });

  //
}
