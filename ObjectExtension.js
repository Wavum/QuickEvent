Object.prototype.CustomEventListeners = new Array();

Object.prototype.listenToEvent = function listenToEvent(eventName, callback)
{
    this.CustomEventListeners.push([eventName, callback]);
};

Object.prototype.unlistenFromEvent = function unlistenFromEvent(eventName, callback)
{
    var index = this.CustomEventListeners.indexOf([eventName, callback]);
    this.CustomEventListeners.splice(index, 1);
};

Object.prototype.fireEvent = function fireEvent(eventName)
{
    for (var i = 0; i < this.CustomEventListeners.length; i++)
    {
        if (this.CustomEventListeners[i][0] === eventName)
        {
            this.CustomEventListeners[i][1](this);
        }
    }
};
