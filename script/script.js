{
  const noEmptyClass = 'generator_input-no-empty';
  const generatorApplyClass = 'generator_container-apply';
  const hasImportantList = { c: ['control_updatecount', 'control_filtercount', 'profile_private', 'profile_gift'] };
  const hasOverflowList = { bdrs: ['plurkcnt_pimg', 'plurkbox_holder'] };
  const reviewStyleBlock = document.querySelector('#reviewStyle');

  //========== header
  //== theme mode switch
  const themeNodeSwitch = () => {
    const modeButton = document.querySelector('#mode_switch');
    modeButton.addEventListener('click', () => {
      const status = modeButton.checked ? 'add' : 'remove';
      document.body.classList[status]('dark-mode');
    });
  };

  //== export switch
  const exportSwitch = () => {
    const exportButton = document.querySelector('.export_button');
    const exportArea = document.querySelector('.export');
    exportButton.addEventListener('click', () => {
      exportButton.classList.toggle('nav_btn-active');
      exportArea.classList.toggle('export-open');
    });
  };

  //== sidebar switch
  const sidebarSwitch = () => {
    const sidebarButton = document.querySelector('.sidebar');
    const tools = document.querySelector('.tools');
    sidebarButton.addEventListener('click', () => {
      sidebarButton.classList.toggle('sidebar-active');
      tools.classList.toggle('tools-open');
    });
  };

  //== reset handler
  const inputsResetValue = (box, inputType, resetValue) => {
    const inputs = box.querySelectorAll(`input[type="${inputType}"]`);
    inputs.forEach((input) => {
      input.classList.remove(noEmptyClass);
      input.value = resetValue;
    });
  };
  const checkedResetValue = (box, inputType) => {
    const checkbox = box.querySelectorAll(`input[type="${inputType}"]`);
    checkbox.forEach((input) => (input.checked = false));
    if (inputType === 'radio') {
      if (checkbox.length) checkbox[0].checked = true;
      toIconAndCountPositionSync(false);
    }
  };
  const resetButtonClickHandler = () => {
    const generatorContainer = document.querySelectorAll('.generator_container');
    generatorContainer.forEach((container) => {
      container.classList.remove(generatorApplyClass);
      const generatorBox = container.querySelectorAll('.generator_box');
      generatorBox.forEach((box) => {
        box.dataset.apply = false;
        inputsResetValue(box, 'text', '');
        inputsResetValue(box, 'color', '#000000');
        inputsResetValue(box, 'range', 0);
        checkedResetValue(box, 'checkbox');
        checkedResetValue(box, 'radio');
        reviewStyleBlock.textContent = '';
      });
    });
  };
  const resetHandler = () => {
    const resetButton = document.querySelector('.reset_button');
    resetButton.addEventListener('click', () => {
      const isReset = confirm('確定要清空所有嗎？');
      if (!isReset) return;
      resetButtonClickHandler();
    });
  };

  //== plurkbox no display
  const plurkboxNoDisplay = () => {
    const plurkboxButton = document.querySelector('.plurkbox_button');
    const plurkbox = document.querySelector('#form_holder');
    plurkboxButton.addEventListener('click', () => {
      plurkbox.classList.toggle('no-display');
      const newText = plurkboxButton.textContent === '隱藏噗內回應' ? '顯示噗內回應' : '隱藏噗內回應';
      plurkboxButton.textContent = newText;
    });
  };

  //== plurkbg handler
  const plurkbgHandler = () => {
    const plurkbgButton = document.querySelector('.plurkbg_button');
    const plurkbgColor = document.querySelector('#plurkbg_color');
    const plurkbgImage = document.querySelector('#plurkbg_image');
    const colorPreview = document.querySelector(`.${plurkbgColor.id}`);
    const imagePreview = document.querySelector(`.${plurkbgImage.id}`);
    const plurkbgClear = document.querySelector('.plurkbg_clear');
    const layoutContent = document.querySelector('#layout_content');
    let src = null;
    plurkbgButton.addEventListener('click', () => {
      plurkbgButton.classList.toggle('nav_btn-active');
      plurkbgButton.parentNode.classList.toggle('plurkbg-open');
    });
    plurkbgColor.addEventListener('change', () => {
      const color = plurkbgColor.value;
      colorPreview.style.backgroundColor = color;
      layoutContent.style.backgroundColor = color;
    });
    plurkbgImage.addEventListener('change', (e) => {
      URL.revokeObjectURL(src);
      src = URL.createObjectURL(e.target.files[0]);
      const image = `url('${src}')`;
      imagePreview.style.backgroundImage = image;
      layoutContent.style.backgroundImage = image;
    });
    plurkbgClear.addEventListener('click', (e) => {
      e.preventDefault();
      URL.revokeObjectURL(src);
      imagePreview.style.backgroundImage = '';
      layoutContent.style.backgroundImage = '';
    });
  };

  //========== header all handler
  const headerAllHandler = () => {
    plurkboxNoDisplay();
    plurkbgHandler();
    sidebarSwitch();
    exportSwitch();
    resetHandler();
    document.addEventListener('DOMContentLoaded', resetButtonClickHandler);
    // themeNodeSwitch();
  };
  headerAllHandler();

  //========== tools
  //== tools container 開關
  const toolsContainerSwitch = () => {
    const toolsContainer = document.querySelectorAll('.tools_container');
    const menuItem = document.querySelectorAll('.menu_item');
    const menuClass = 'menu_item-active';
    const toolsClass = 'tools_container-open';
    menuItem.forEach((menu, i) => {
      menu.addEventListener('click', () => {
        const menuActive = document.querySelector(`.${menuClass}`);
        const toolsOpen = document.querySelector(`.${toolsClass}`);
        menuActive.classList.remove(menuClass);
        toolsOpen.classList.remove(toolsClass);
        menu.classList.add(menuClass);
        toolsContainer[i].classList.add(toolsClass);
      });
    });
  };

  //== generator container 開關
  const generatorContainerClickHandler = (e, container) => {
    const openClass = 'generator_container-open';
    const isOpen = container.classList.contains(openClass);
    if (isOpen) {
      const isTitle = e.target.matches('.generator_title');
      if (isTitle) container.classList.remove(openClass);
    } else {
      container.classList.add(openClass);
    }
  };
  const generatorOpened = () => {
    const generatorContainer = document.querySelectorAll('.generator_container');
    generatorContainer.forEach((container) => {
      container.addEventListener('click', (e) => generatorContainerClickHandler(e, container));
    });
  };

  //== 圖示化 作用後才開啟 圖示化的未讀位置
  const radioDisable = (countPosition, toIcon) => {
    countPosition.forEach((radio) => (radio.disabled = !toIcon.checked));
  };
  const toIconAndCountPositionSync = (whenClick = true) => {
    const toIcon = document.querySelector('#control_filterstyle_toicon');
    const countPosition = document.querySelectorAll('.control_filterstyle_countposi');
    radioDisable(countPosition, toIcon);
    if (whenClick) toIcon.addEventListener('change', () => radioDisable(countPosition, toIcon));
  };

  //== input apply status
  //== inputs apply
  const generatorContainerIsApply = (container, boxes) => {
    const hasApply = [...boxes].some((box) => box.dataset.apply === 'true');
    const status = hasApply ? 'add' : 'remove';
    container.classList[status](generatorApplyClass);
  };
  const isApplyByNeed = (inputs) => {
    const hasNeed = [...inputs].filter((input) => input.dataset.need === 'true');
    const isNeedApply = !!hasNeed.length && hasNeed.every((input) => input.classList.contains(noEmptyClass));
    return isNeedApply;
  };
  const isApplyByCheckboxChange = (inputs) => {
    const [hasChangeInCheckbox] = [...inputs].filter((input) => input.dataset.change === 'true' && input.type === 'checkbox');
    const isCheckboxChangeApply = !!hasChangeInCheckbox && hasChangeInCheckbox.checked;
    return isCheckboxChangeApply;
  };
  const isApplyByRadioChange = (inputs) => {
    const hasChangeInRadio = [...inputs].filter((input) => input.dataset.change === 'true' && input.type === 'radio');
    const isRadioChangeApply = !!hasChangeInRadio.length && !hasChangeInRadio[0].checked;
    return isRadioChangeApply;
  };
  const inputGroupApplyConfirm = (box, inputs) => {
    const isNeedApply = isApplyByNeed(inputs);
    const isCheckboxChangeApply = isApplyByCheckboxChange(inputs);
    const isRadioChangeApply = isApplyByRadioChange(inputs);
    box.dataset.apply = isNeedApply || isCheckboxChangeApply || isRadioChangeApply;
  };
  //== input no empty
  const inputNoEmptyChangeHandler = (input) => {
    if (input.type !== 'text') return;
    const status = input.value === '' ? 'remove' : 'add';
    input.classList[status](noEmptyClass);
  };
  //== generator inputs handler
  const generatorInputsHandler = () => {
    const generatorContainer = document.querySelectorAll('.generator_container');
    generatorContainer.forEach((container) => {
      const generatorBox = container.querySelectorAll('.generator_box');
      generatorBox.forEach((box) => {
        const generatorInput = box.querySelectorAll('input');
        generatorInput.forEach((input) => {
          inputNoEmptyChangeHandler(input);
          input.addEventListener('input', () => {
            inputNoEmptyChangeHandler(input);
            inputGroupApplyConfirm(box, generatorInput);
            generatorContainerIsApply(container, generatorBox);
          });
        });
        inputGroupApplyConfirm(box, generatorInput);
      });
      generatorContainerIsApply(container, generatorBox);
    });
  };

  //== input value 同步
  const inputBoxClickHandler = (input, output) => {
    input.addEventListener('input', () => {
      output.value = input.value;
      if (output.type === 'text') inputNoEmptyChangeHandler(output);
    });
  };
  const inputValueSync = () => {
    const generatorGroup = document.querySelectorAll('.generator_group');
    generatorGroup.forEach((group) => {
      const boxes = group.querySelectorAll('.color_box, .range_box');
      if (!boxes.length) return;
      const [input, box] = boxes;
      inputBoxClickHandler(input, box);
      inputBoxClickHandler(box, input);
    });
  };

  //========== generator basic handler
  const generatorBasicHandler = () => {
    toolsContainerSwitch();
    generatorOpened();
    toIconAndCountPositionSync();
    inputValueSync();
    generatorInputsHandler();
  };
  generatorBasicHandler();

  //========== get values function
  const valueHasImportant = (value, type, areaName) => {
    if (!hasImportantList[type]) return;
    if (hasImportantList[type].includes(areaName)) {
      value[0] += ' !important';
    }
  };
  const valueHasOverflow = (value, type, areaName) => {
    if (!hasOverflowList[type]) return;
    if (hasOverflowList[type].includes(areaName)) {
      value.push('overflow: hidden');
    }
  };
  const valueHexToRgba = (hex, opacity = '') => {
    const isHex = String(hex).match(/#(.{2})(.{2})(.{2})/);
    const color = isHex ? isHex.slice(1).map((hex) => parseInt(hex, 16)) : [];
    return opacity ? [`rgba(${color.join(', ')}, ${opacity})`] : [hex];
  };
  const valuePlusUnit = (value, unit = 'px') => {
    return value.map((string) => string + unit);
  };
  const valueDcbgi = (value) => {
    return [`url('${value}')`, `content: ''`, 'position: absolute', 'display: block', 'background-repeat: no-repeat'];
  };
  const valuePcoinbgi = (value) => {
    return [
      `url('${value}')`,
      `content: ''`,
      'position: absolute',
      'display: block',
      'bottom: 0',
      'left: 0',
      'transform: translateX(-100%)',
      'background-position: bottom right',
      'background-repeat: no-repeat',
    ];
  };
  const valueTlbgi = (value) => {
    return [`url('${value}')`, 'background-repeat: repeat-x', 'background-position: bottom left'];
  };
  const valueUp = () => {
    const result = ['噗友暱稱', ['.timeline-cnt .td_qual > span', ['position: absolute', 'transform: translate(-25px, -150%)']]];
    return [result];
  };
  const valueBoxup = () => {
    const result = ['噗內暱稱上移', ['#form_holder .plurk_cnt .td_qual', ['position: absolute']], ['#form_holder .plurk_cnt .text_holder', ['margin-top: 1.5em', 'padding-left: 0.7em']]];
    return [result];
  };
  const valueOpen = (value) => {
    const top = ['頻道向上展開', ['#filter_tab a, #filter_tab:hover a.no_unread', ['height: 25px', 'margin-top: 6px', 'margin-right: 6px']]];
    const right = ['頻道向右展開', ...top.slice(1), ['#filter_tab li', ['clear: none', 'width: auto']]];
    const result = { top, right };
    return [result[value]];
  };
  const valueFtposi = () => {
    const result = ['頻道往右放', ['.timeline_control', ['margin-left: 0']], ['#timeline_control_holder', ['width: 100%']], ['#updater', ['left: 10px']], ['#filter_tab', ['padding-right: 20px']]];
    return [result];
  };
  const valueToicon = () => {
    const countposiValue = document.querySelector('.control_filterstyle_countposi:checked').value;
    const top = [
      '讓頻道未讀數字出現在上面',
      [
        '#filter_tab a .unread_generic',
        ['position: absolute', 'left: 0', 'width: 30px', 'height: 20px', 'line-height: 20px', 'margin: 0', 'padding: 0', 'transform: translateY(-100%)', 'border-radius: 5px'],
      ],
    ];
    const right = [
      '讓頻道未讀數字出現在右邊',
      ['#updater', ['margin-left: 35px']],
      [
        '#filter_tab a .unread_generic',
        ['position: absolute', 'top: 0', 'left: 30px', 'width: 30px', 'height: 25px', 'line-height: 25px', 'margin-top: 6px', 'margin-left: 0', 'padding: 0 4px', 'border-radius: 5px'],
      ],
    ];
    const left = [
      '讓頻道未讀數字出現在左邊',
      [
        '#filter_tab a .unread_generic',
        [
          'position: absolute',
          'top: 0',
          'left: 0',
          'width: 30px',
          'height: 25px',
          'line-height: 25px',
          'margin-top: 6px',
          'margin-left: 0',
          'padding: 0 4px',
          'transform: translateX(-100%)',
          'border-radius: 5px',
        ],
      ],
    ];
    const countposi = { top, right, left };
    const icon = [
      '頻道圖示化',
      ['#filter_tab li', ['position: relative']],
      ['#filter_tab a', ['width: 30px', 'padding: 0', 'overflow: hidden']],
      ['#filter_tab a i', ['float: left', 'width: 30px', 'line-height: 25px']],
      ['#filter_tab a i::before', ['width: 30px']],
    ];
    return [icon, countposi[countposiValue]];
  };

  //========== generator value catch and conversion
  const generatorValuesGet = (box, generatorValues) => {
    const boxType = box.dataset.type;
    const inputs = [...box.querySelectorAll(`.generator_input, .generator_input-radio:checked, .generator_input-checkbox`)];
    const values = inputs.map((input) => {
      let result = null;
      if (input.type === 'checkbox') result = input.checked;
      else result = input.value;
      return result;
    });
    generatorValues[boxType] = {
      css: box.querySelector('.generator_subtitle').dataset.css,
      value: values,
    };
  };
  const generatorValueBasic = (generator, originValueList) => {
    const generatorTitle = generator.querySelector('.generator_title');
    const generatorValues = {
      areaName: generator.id,
      selector: generatorTitle.dataset.selector,
      detail: generatorTitle.textContent,
    };
    const applyBoxes = [...generator.querySelectorAll('.generator_box')].filter((box) => box.dataset.apply === 'true');
    applyBoxes.forEach((box) => generatorValuesGet(box, generatorValues));
    originValueList.push(generatorValues);
  };
  const generatorValueTypeFilter = (valueList) => {
    const typeFilterList = ['areaName', 'selector', 'detail'];
    const valueTypes = Object.keys(valueList).filter((key) => {
      if (!typeFilterList.includes(key)) return key;
    });
    return valueTypes;
  };
  const generatorValueConversion = (valueList, type, areaName) => {
    const value = valueList[type].value;
    const conversionFunction = {
      bgc: valueHexToRgba(...value),
      c: valueHexToRgba(...value),
      fz: valuePlusUnit(value),
      opa: value,
      bdrs: [value.join('')],
      bd: [`${value[1]}px solid ${value[0]}`],
      sha: [`${value[2]}px ${value[2]}px ${value[3]}px ${valueHexToRgba(value[0], value[1])}`],
      dp: ['none'],
      blur: [`blur(${value[0]}px)`],
      posi: valuePlusUnit(value, '%'),
      size: valuePlusUnit(value),
      dcbgi: valueDcbgi(value[0]),
      pcoinbgi: valuePcoinbgi(value[0]),
      tlbgi: valueTlbgi(value[0]),
      tlbgirep: ['no-repeat'],
      tlbgiposi: [`bottom left ${value[0]}%`],
      up: valueUp(),
      boxup: valueBoxup(),
      open: valueOpen(value[0]),
      ftposi: valueFtposi(),
      toicon: valueToicon(),
    };
    return conversionFunction[type];
  };
  const generatorValueToBeResult = (valueList, valueTypes, areaName) => {
    valueTypes.forEach((type) => {
      valueList[type].result = generatorValueConversion(valueList, type);
      valueHasImportant(valueList[type].result, type, areaName);
      valueHasOverflow(valueList[type].result, type, areaName);
    });
  };
  const generatorCssNormalContent = (valueList, valueTypes, exportResultList) => {
    const selector = valueList.selector;
    const detail = `/*${valueList.detail}*/`;
    const cssList = [];
    valueTypes.forEach((type) => {
      const resultList = [...valueList[type].result];
      const attrList = valueList[type].css.split(', ');
      const value = resultList.splice(0, attrList.length);
      cssList.push(...resultList.map((value) => `\n  ${value};`));
      cssList.push(...attrList.map((css, i) => `\n  ${css}: ${value[i]};`));
    });
    const content = `${detail}\n${selector} {${cssList.join('')}\n}`;
    exportResultList.push(content);
  };
  const generatorCssSpacialContent = (valueList, valueTypes, exportResultList) => {
    valueTypes.forEach((type) => {
      const resultValue = valueList[type].result;
      resultValue.forEach((result) => {
        const contentList = [];
        const [detail, ...resultList] = result;
        resultList.forEach((result) => {
          const [spacialSelector, cssList] = result;
          const contentTemp = cssList.map((text) => `\n  ${text};`).join('');
          contentList.push(`${spacialSelector} {${contentTemp}\n}`);
        });
        const content = `/*${detail}*/\n${contentList.join('\n')}`;
        exportResultList.push(content);
      });
    });
  };
  const generatorCssContentCreate = (valueList, valueTypes, exportResultList) => {
    const typeSpacialList = ['up', 'boxup', 'open', 'ftposi', 'toicon'];
    const noSpacialType = valueTypes.every((type) => !typeSpacialList.includes(type));
    if (noSpacialType) {
      generatorCssNormalContent(valueList, valueTypes, exportResultList);
    } else {
      generatorCssSpacialContent(valueList, valueTypes, exportResultList);
    }
  };
  const generatorExportResult = () => {
    const generatorOriginValueList = [];
    const exportResultList = [];
    const applyGenerator = document.querySelectorAll(`.${generatorApplyClass}`);
    applyGenerator.forEach((generator) => generatorValueBasic(generator, generatorOriginValueList));
    generatorOriginValueList.forEach((valueList) => {
      const areaName = valueList.areaName;
      const valueTypes = generatorValueTypeFilter(valueList);
      generatorValueToBeResult(valueList, valueTypes, areaName);
      generatorCssContentCreate(valueList, valueTypes, exportResultList);
    });
    return exportResultList;
  };

  //========== export control
  const exportControl = () => {
    const exportCode = document.querySelector('.export_code');
    const createButton = document.querySelector('.create_button');
    const selectButton = document.querySelector('.select_button');
    const clearButton = document.querySelector('.clear_button');
    selectButton.addEventListener('click', () => exportCode.select());
    clearButton.addEventListener('click', () => (exportCode.value = ''));
    createButton.addEventListener('click', () => {
      const info = ['/**======== Create by Plurk CSS Generator ========**/', '/**== https://hoshikata.github.io/PlurkCSSGenerator ==**/'];
      const result = generatorExportResult();
      result.unshift(...info);
      exportCode.value = result.join('\n');
    });
  };
  exportControl();

  //========== review
  //== 讓河道滑動
  const reviewContainerNoScroll = (blockCnt) => {
    const reviewContainer = document.querySelector('.review_container');
    const removeEvent = (e) => e.preventDefault();
    blockCnt.addEventListener('mouseenter', () => {
      reviewContainer.addEventListener('wheel', removeEvent);
    });
    blockCnt.addEventListener('mouseleave', () => {
      reviewContainer.removeEventListener('wheel', removeEvent);
    });
  };
  const blockCntDrag = (blockCnt) => {
    let isDrag = false;
    let preX = 0;
    blockCnt.addEventListener('mousedown', (e) => {
      isDrag = true;
      preX = e.pageX;
    });
    blockCnt.addEventListener('mouseup', () => (isDrag = false));
    blockCnt.addEventListener('mousemove', (e) => {
      if (isDrag) {
        const distance = preX - e.pageX;
        blockCnt.scrollBy(distance, 0);
        preX = e.pageX;
      }
    });
  };
  const blockCntScroll = () => {
    const blockCnt = document.querySelector('.block_cnt');
    reviewContainerNoScroll(blockCnt);
    blockCntDrag(blockCnt);
    blockCnt.addEventListener('wheel', (e) => {
      const dir = e.deltaY > 0 ? 1 : -1;
      const nowLeft = blockCnt.scrollLeft;
      blockCnt.scrollTo(nowLeft + 100 * dir, 0);
    });
  };

  //== 將結果放到 style 中
  const generatorReviewResultWhenInput = () => {
    const resultList = generatorExportResult();
    const newResultList = resultList.map((result) => {
      result = result.replace(/\n\s\s/g, '');
      result = result.replace(/\/\*(.+?)\*\//g, '');
      result = result.replace(/\n}/g, '}');
      result = result.replace(/\n/g, '#review ');
      return result;
    });
    return newResultList.join('');
  };
  const generatorReviewHandler = () => {
    const generatorInput = document.querySelectorAll('.generator_box input');
    let result = '';
    generatorInput.forEach((input) => {
      input.addEventListener('input', () => {
        const newResult = generatorReviewResultWhenInput();
        if (result === newResult) return;
        result = newResult;
        reviewStyleBlock.textContent = result;
      });
    });
  };

  const reviewControl = () => {
    blockCntScroll();
    generatorReviewHandler();
  };
  reviewControl();
}
