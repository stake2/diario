var ChapterNumber;
var Last_Chapter = 29;
var readattribute;
var writeattribute;
var userLang = navigator.language || navigator.userLanguage;

function DefineChapter(number) {
    ChapterNumber = number;
	readattribute = $("#readbtnattribute" + ChapterNumber).html();
	writeattribute = $("#writebtnattribute" + ChapterNumber).html();
}

if (userLang == "pt-BR" || userLang == "pt-PT") {
	var captext1 = "capítulo";
	var captext2 = "ler-capitulo-";
}
	
else {
	var captext1 = "chapter";
	var captext2 = "read-chapter-";
}
	
function WriteChapter(ChapterWriteContent) {
    $("#chapter-text-" + ChapterNumber).html(ChapterWriteContent);
    $("#write-button-" + ChapterNumber).html('<h2><i class="fas fa-book"></i></h2>');
    $("#write-button-" + ChapterNumber).attr('onclick', 'OpenChapter2(' + readattribute + ');');
}

function OpenChapter2(ChapterReadContent) {
    openCity(captext1 + '-' + ChapterNumber);
    $("#chapter-text-" + ChapterNumber).html(ChapterReadContent);
    $("#write-button-" + ChapterNumber).html('<h2><i class="fas fa-pen"></i></h2>');
    $("#write-button-" + ChapterNumber).attr('onclick', 'WriteChapter(' + writeattribute + ');');
}