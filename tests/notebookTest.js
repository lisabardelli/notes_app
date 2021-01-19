(function() {
    var notebook;
    function testCreateNewNotebookHasEntriesProperty() {
        notebook = new Notebook();
        assert.isTrue(notebook.entries.length === 0, "#testCreateNewNotebookHasEntriesProperty()");
    };
testCreateNewNotebookHasEntriesProperty();
})();

(function(){
  var notebook;
  var note;
  function testAddNewNoteToNotebook() {
    notebook = new Notebook();
    note = new Note();
    notebook.addEntry(note)
    assert.isTrue(notebook.entries.includes(note), "#testAddNewNoteToNotebook()")
  }
  testAddNewNoteToNotebook();
})();

(function() {
  var notebook;
  var note;
  function testViewNotes() {
    notebook = new Notebook();
    note = new Note();
    notebook.addEntry(note);
    assert.isTrue(notebook.viewEntries() === notebook.entries, "#testViewNotes()")
  }
  testViewNotes();
}());
