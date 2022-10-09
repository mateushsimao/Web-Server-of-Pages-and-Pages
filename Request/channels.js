function getChannels(url) {
    let url = "localhost:30001/api/v1/channels/find/names"
    let request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send()

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}
