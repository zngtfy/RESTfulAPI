"use strict";

exports.dashboardOrderStatus = (req, res, next) => {
  const response = {
    "count": 6,
    "data": [
      {
        "Key": "Open",
        "Value": "Open"
      },
      {
        "Key": "Matched",
        "Value": "Matched"
      },
      {
        "Key": "Expired",
        "Value": "Expired"
      },
      {
        "Key": "Cancelled",
        "Value": "Cancelled"
      },
      {
        "Key": "Pending",
        "Value": "Pending"
      },
      {
        "Key": "Unsuccessful",
        "Value": "Unsuccessful"
      }
    ]
  };
  res.status(200).json(response);
};

exports.dashboardTradeStatus = (req, res, next) => {
  const response = {
    "count": 3,
    "data": [
      {
        "Key": "Pending",
        "Value": "Pending"
      },
      {
        "Key": "Settled",
        "Value": "Settled"
      },
      {
        "Key": "Unsuccessful",
        "Value": "Unsuccessful"
      }
    ]
  };
  res.status(200).json(response);
};

exports.tradeStatus = (req, res, next) => {
  const response = {
    "count": 8,
    "data": [
      {
        "Key": "1",
        "Value": "Pending"
      },
      {
        "Key": "2",
        "Value": "Escrow Successful"
      },
      {
        "Key": "3",
        "Value": "Escrow Unsuccessful"
      },
      {
        "Key": "4",
        "Value": "Trustee Notified"
      },
      {
        "Key": "5",
        "Value": "Units transferred"
      },
      {
        "Key": "6",
        "Value": "Funds to be released"
      },
      {
        "Key": "7",
        "Value": "Funds released"
      },
      {
        "Key": "8",
        "Value": "Cancelled"
      }
    ]
  };
  res.status(200).json(response);
};

exports.historyStatus = (req, res, next) => {
  const response = {
    "count": 2,
    "data": [
      {
        "Key": "Pending",
        "Value": "Pending"
      },
      {
        "Key": "Settled",
        "Value": "Settled"
      }
    ]
  };
  res.status(200).json(response);
};

exports.companyStatus = (req, res, next) => {
  const response = {
    "count": 3,
    "data": [
      {
        "Key": "Active",
        "Value": "Active"
      },
      {
        "Key": "Inactive",
        "Value": "Inactive"
      },
      {
        "Key": "Halt Trading",
        "Value": "Halt Trading"
      }
    ]
  };
  res.status(200).json(response);
};

exports.currency = (req, res, next) => {
  const response = {
    "count": 3,
    "data": [
      {
        "Key": "USD",
        "Value": "US Dollar"
      },
      {
        "Key": "SGD",
        "Value": "SG Dollar"
      },
      {
        "Key": "VND",
        "Value": "VN Dong"
      }
    ]
  };
  res.status(200).json(response);
};

exports.roleStatus = (req, res, next) => {
  const response = {
    "count": 2,
    "data": [
      {
        "Key": "Active",
        "Value": "Active"
      },
      {
        "Key": "Inactive",
        "Value": "Inactive"
      }
    ]
  };
  res.status(200).json(response);
};