window.addEventListener("mousewheel", function(e)
{
	if (!e.ctrlKey)
		return true;
	
	var action = e.wheelDelta > 0 ? "zoomIn" : e.wheelDelta < 0 ? "zoomOut" : null;
	if (action != null)
		chrome.runtime.sendMessage({ action: action });
	e.preventDefault();
	return false;
});

window.addEventListener("keydown", function(e)
{
	var action;
	
	if (e.keyCode == 107)
		action = e.ctrlKey ? "zoomInMore" : "zoomIn";
	else if (e.keyCode == 109)
		action = e.ctrlKey ? "zoomOutMore" : "zoomOut";
	else if (e.keyCode == 106)
		action = "zoomReset";
	else
		return true;

	chrome.runtime.sendMessage({ action: action });
	e.preventDefault();
	return false;
}, false);
