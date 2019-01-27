var rcode = {
  "500": {
    code: "500",
    status: "Internal Server Error"
  },
  "200": {
    code: "200",
    status: "OK"
  },
  "400": {
    code: "400",
    status: "Bad Request"
  },
  "401": {
    code: "401",
    status: "Unauthorized"
  },
  "409": {
    code: "409",
    status: "Conflict"
  },
  "201": {
    code: "201",
    status: "Created"
  },
  "404": {
    code: "404",
    status: "Data Not Found"
  }
};

module.exports = {
  code: function(code, datas, errorCode) {
    var buildRcode = rcode[code];
    buildRcode.datas = datas;
    buildRcode.errorCode = errorCode;
    if (datas == "") delete rcode[code].datas;
    if (errorCode == "") delete rcode[code].errorCode;
    return buildRcode;
  }
};
