"use strict";

exports.list_trading_boards = (req, res, next) => {
  const response = {
    "count": 2,
    "data": [
      {
        "Company": "CapBridge Syndicate",
        "LastPrice": 4,
        "NoofBuyOrders": 0,
        "NoofSellOrders": 4,
        "HighestBid": 25,
        "VWAP": "-",
        "LowestAsk": "Hello"
      },
      {
        "Company": "CapBridge Syndicate",
        "LastPrice": 3,
        "NoofBuyOrders": 0,
        "NoofSellOrders": 3,
        "HighestBid": 2,
        "VWAP": "-",
        "LowestAsk": "No no"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_trading_histories = (req, res, next) => {
  const response = {
    "count": 1,
    "data": [
      {
        "Name": "Honey Bee",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Settled",
        "SubmittedOn": "2018-05-01T09:40:00.000Z"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_order_status = (req, res, next) => {
  const response = {
    "count": 4,
    "data": [
      {
        "Key": "OPE",
        "Value": "Open"
      },
      {
        "Key": "MAT",
        "Value": "Matched"
      },
      {
        "Key": "CAN",
        "Value": "Cancelled"
      },
      {
        "Key": "UNS",
        "Value": "Unsuccessful"
      },
    ]
  };
  res.status(200).json(response);
};

exports.list_trade_status = (req, res, next) => {
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

exports.list_trade_history_status = (req, res, next) => {
  const response = {
    "count": 2,
    "data": [
      {
        "Key": "1",
        "Value": "Pending"
      },
      {
        "Key": "2",
        "Value": "Settled"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_company_status = (req, res, next) => {
  const response = {
    "count": 2,
    "data": [
      {
        "Key": "ACT",
        "Value": "Active"
      },
      {
        "Key": "INA",
        "Value": "Inactive"
      },
      {
        "Key": "HAL",
        "Value": "Halt Trading"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_currency = (req, res, next) => {
  const response = {
    "count": 2,
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