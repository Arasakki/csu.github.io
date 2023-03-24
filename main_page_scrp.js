const template_hostel_table = `
<td><input type="Checkbox" class="hostel_col1"></td>
<td><input type="number" class="hostel_col2" value=""></td>
<td><input type="Name" class="hostel_col3" value=""></td>
<td>
    <select name="" id="" class="hostel_col4">
        <option value="">МН-101</option>
        <option value="">МН-201</option>
        <option value="">МН-301</option>
        <option value="">МН-401</option>
        <option value="">МП-101</option>
        <option value="">МП-102</option>
        <option value="">МП-103</option>
        <option value="">МП-201</option>
        <option value="">МП-202</option>
        <option value="">МП-203</option>
        <option value="">МП-301</option>
        <option value="">МП-401</option>
        <option value="">МП-402</option>
        <option value="">МТ-101</option>
        <option value="">МТ-102</option>
        <option value="">МТ-201</option>
        <option value="">МТ-202</option>
        <option value="">МТ-301</option>
        <option value="">МТ-302</option>
        <option value="">МТ-401</option>
        <option value="">МТ-402</option>
        <option value="">МК-101</option>
        <option value="">МК-102</option>
        <option value="">МК-201</option>
        <option value="">МК-202</option>
        <option value="">МК-301</option>
        <option value="">МК-401</option>
        <option value="">МК-501</option>
        <option value="">МК-601</option>
        <option value="">ММмаг-101</option>
        <option value="">ММмаг-201</option>
        <option value="">МПмаг-101</option>
        <option value="">МПмаг-102</option>
        <option value="">МПмаг-201</option>
        <option value="">МПмаг-202</option>
        <option value="">МТмаг-101</option>
        <option value="">МТмаг-201</option>
        <option value="">Академ</option>
    </select>
</td>
<td>
    <select name="" id="" class="hostel_col5">
        <option value="">202(2)</option>
        <option value="">202(3)</option>
        <option value="">209(2)</option>
        <option value="">209(3)</option>
        <option value="">211(2)</option>
        <option value="">211(3)</option>
        <option value="">601а</option>
        <option value="">601(2)</option>
        <option value="">601(3)</option>
        <option value="">602а</option>
        <option value="">602(2)</option>
        <option value="">602(3)</option>
        <option value="">603(2)</option>
        <option value="">603(3)</option>
        <option value="">604(2)</option>
        <option value="">604(3)</option>
        <option value="">605(2)</option>
        <option value="">605(3)</option>
        <option value="">606(2)</option>
        <option value="">606(3)</option>
        <option value="">607а</option>
        <option value="">607(2)</option>
        <option value="">607(3)</option>
        <option value="">608а</option>
        <option value="">608(2)</option>
        <option value="">608(3)</option>
        <option value="">609(2)</option>
        <option value="">609(3)</option>
        <option value="">610(2)</option>
        <option value="">610(3)</option>
        <option value="">611(2)</option>
        <option value="">611(3)</option>
        <option value="">612(2)</option>
        <option value="">612(3)</option>
        <option value="">101(2)</option>
        <option value="">102(3)</option>
    </select>
</td>
<td>
    <select name="" id="" class="hostel_col6">
        <option value="">Бюджет</option>
        <option value="">Договор</option>
    </select>
</td>
<td><input type="date" name="Date" id="DatebDay" class="hostel_col7"></td>
<td>
    <select name="" id="" class="hostel_col8">
        <option value="">РФ</option>
        <option value="">Таджикистан</option>
        <option value="">Казахстан</option>
    </select>
</td>
<td>
    <select name="" id="" class="hostel_col9">
        <option value="">ДА (ГАС)</option>
        <option value="">ДА (ГАС, ГСС)</option>
        <option value="">ДА (ГАС, Президента)</option>
        <option value="">ДА (ГАС, Правительства)</option>
        <option value="">ДА (ГСС)</option>
        <option value="">НЕТ</option>
    </select>
</td>
<td>
    <select name="" id="" class="stud_col10">
        <option value="">Сирота</option>
        <option value="">Инвалид I гр.</option>
        <option value="">Инвалид II гр.</option>
        <option value="">Инвалид III гр.</option>
        <option value="">Ребенок-инвалид</option>
        <option value="">ГСП</option>
    </select>
</td>
<td><input type="date" name="hostel_startDate" id="DatebDay"></td>
<td><input type="date" name="hostel_check-in_Date" id="DatebDay"></td>
<td><input type="date" name="hostel_pact_endDate" id="DatebDay"></td>
<td><input type="date" name="hostel_check-out_Date" id="DatebDay"></td>
<td>
    <select name="" id="" class="hostel_col15">
       <option value="">АКАДЕМ</option>
       <option value="">Отчислен(а)</option>
       <option value="">По собственному</option>
       <option value="">Перевод</option>
       <option value="">Окончание ВУЗа</option>
       <option value="">Не зачислен(а)!</option>
       <option value="">Окон. договора</option> 
    </select>
</td>
<td><input type="date" name="hostel_switch_Date" id="DatebDay"></td>
<td><input type="text" class="hostel_col17" value=""></td>
<td><input type="text" class="hostel_col18"></td>
<td><input type="text" class="hostel_col18"></td>
</form>
</tr>`

const template_stud_table = `
<form action="">
                                    <td><input type="checkbox" name="" id="" class="stud_col1"></td>
                                    <td><input type="Number" value="" class="stud_col2"></td>
                                    <td><input type="Name" value="" class="stud_col3"></td>
                                    <td>
                                        <select name="" id="" class="stud_col4">
                                            <option value="">МН-101</option>
                                            <option value="">МН-201</option>
                                            <option value="">МН-301</option>
                                            <option value="">МН-401</option>
                                            <option value="">МП-101</option>
                                            <option value="">МП-102</option>
                                            <option value="">МП-103</option>
                                            <option value="">МП-201</option>
                                            <option value="">МП-202</option>
                                            <option value="">МП-203</option>
                                            <option value="">МП-301</option>
                                            <option value="">МП-401</option>
                                            <option value="">МП-402</option>
                                            <option value="">МТ-101</option>
                                            <option value="">МТ-102</option>
                                            <option value="">МТ-201</option>
                                            <option value="">МТ-202</option>
                                            <option value="">МТ-301</option>
                                            <option value="">МТ-302</option>
                                            <option value="">МТ-401</option>
                                            <option value="">МТ-402</option>
                                            <option value="">МК-101</option>
                                            <option value="">МК-102</option>
                                            <option value="">МК-201</option>
                                            <option value="">МК-202</option>
                                            <option value="">МК-301</option>
                                            <option value="">МК-401</option>
                                            <option value="">МК-501</option>
                                            <option value="">МК-601</option>
                                            <option value="">ММмаг-101</option>
                                            <option value="">ММмаг-201</option>
                                            <option value="">МПмаг-101</option>
                                            <option value="">МПмаг-102</option>
                                            <option value="">МПмаг-201</option>
                                            <option value="">МПмаг-202</option>
                                            <option value="">МТмаг-101</option>
                                            <option value="">МТмаг-201</option>
                                            <option value="">Академ</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="" id="" class="stud_col5">
                                            <option value="">Бюджет</option>
                                            <option value="">Договор</option>
                                        </select>
                                    </td>
                                    <td><input type="date" name="Date" id="DatebDay" class="stud_col6"></td>
                                    <td>
                                        <select name="" id="" class="stud_col7">
                                            <option value="">РФ</option>
                                            <option value="">Таджикистан</option>
                                            <option value="">Казахстан</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="" id="" class="stud_col8">
                                            <option value="">ДА (ГАС)</option>
                                            <option value="">ДА (ГАС, ГСС)</option>
                                            <option value="">ДА (ГАС, Президента)</option>
                                            <option value="">ДА (ГАС, Правительства)</option>
                                            <option value="">ДА (ГСС)</option>
                                            <option value="">НЕТ</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="" id="" class="stud_col9">
                                            <option value="">Сирота</option>
                                            <option value="">Инвалид I гр.</option>
                                            <option value="">Инвалид II гр.</option>
                                            <option value="">Инвалид III гр.</option>
                                            <option value="">Ребенок-инвалид</option>
                                            <option value="">ГСП</option>
                                        </select>
                                    </td>
                                    <td><input type="date" name="startDate" id="DatebDay" class="stud_col10"></td>
                                    <td><input type="date" name="endDate" id="DatebDay" class="stud_col11"></td>
                                    <td><input type="text" value="532-5а, 13.12.2021" class="stud_col12"></td>
                                    <td><input type="text" value="" class="stud_col13"></td>
                                </form>
                            </tr>
`

// Switch tables
const tabsBtn   = document.querySelectorAll(".btnTable");
const tabsItems = document.querySelectorAll(".tableAll");
tabsBtn.forEach(onTabClick);
    
function onTabClick(item) {
    item.addEventListener("click", function() {
        var currentBtn = item;
        globalThis.tabId = currentBtn.getAttribute("data-tab");
        var currentTab = document.querySelector(tabId);
        console.log(tabId);
        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
        
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
        
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
    
document.querySelector('.btnTable').click();

// Add new line in Table's

function addStr() { 
    console.log(tabId);
    if (tabId == "#tab_1") {
        var str = document.getElementById('table--tbody--stud');
        var add = str.insertRow(-1);
        var addTr = document.createElement('tr');
        addTr.innerHTML = template_stud_table;
        str.appendChild(addTr);
    }  
    else if (tabId == "#tab_2") {
        var str = document.getElementById('table--tbody--hostel');
        var add = str.insertRow(-1);
        var addTr = document.createElement('tr');
        addTr.innerHTML = template_hostel_table;
        str.appendChild(addTr);
    }
}

// Date Input
document.getElementById('DatebDay').valueAsDate = new Date();