

function hideCol()
{
  var sheet = SpreadsheetApp.getActive().getSheetByName('Dashboard'); //put the name of the sheet in place of 'Main'

  sheet.hideColumns(7); //1= A
  sheet.hideColumns(8); //b
  sheet.hideColumns(9); //c
  sheet.hideColumns(10);
  sheet.hideColumns(11);

}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Column Options')
      .addItem('Hide Columns', 'hideCol')
      .addItem("Show Columns", 'show')
      .addToUi();
}


  function show() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Main'); //put the name of the sheet in place of 'Main'
  sheet.hideColumns(7); //1= A
  sheet.hideColumns(8); //b
  sheet.hideColumns(9); //c
  sheet.hideColumns(10);
  sheet.hideColumns(10);
}


  // code needs refactoring
//  sheet.hideColumns(8); //1= A
//  sheet.hideColumns(9); //b
//  sheet.hideColumns(10); //c
