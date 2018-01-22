"use strict";

exports.list_my_orders = (req, res, next) => {
  const response = {
    "count": 10,
    "data": [
      {
        "OrderNo": "00001",
        "Company": "CapBridge Syndicate",
        "OrderedOn": "2018-01-01T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00002",
        "Company": "Toan Corp",
        "OrderedOn": "2018-01-02T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 40,
        "Amount": 5,
        "Value": 400,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00003",
        "Company": "Diep Corp",
        "OrderedOn": "2018-01-03T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00004",
        "Company": "Van Corp",
        "OrderedOn": "2018-01-04T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 44,
        "Value": 100,
        "Currency": "USD",
        "Status": "Cancelled"
      },
      {
        "OrderNo": "00005",
        "Company": "Vinh Corp",
        "OrderedOn": "2018-01-05T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 3,
        "Value": 200,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00006",
        "Company": "Test  Corp",
        "OrderedOn": "2018-01-06T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 14,
        "Amount": 125,
        "Value": 1000,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00007",
        "Company": "SKG",
        "OrderedOn": "2018-01-07T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Matched"
      },
      {
        "OrderNo": "00008",
        "Company": "Appoint",
        "OrderedOn": "2018-01-08T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 43,
        "Amount": 2,
        "Value": 500,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00009",
        "Company": "CWS",
        "OrderedOn": "2018-01-09T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Open"
      },
      {
        "OrderNo": "00010",
        "Company": "Honest Bee",
        "OrderedOn": "2018-01-10T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 40,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Matched"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_my_trades = (req, res, next) => {
  const response = {
    "count": 1,
    "data": [
      {
        "TradeNo": "00001",
        "Company": "CapBridge Syndicate",
        "SubmittedOn": "2018-05-01T09:40:00.000Z",
        "TradeDate": "2018-05-01T09:40:00.000Z",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Pending"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_my_assets = (req, res, next) => {
  const response = {
    "count": 1,
    "data": [
      {
        "Ticker": "AA-23",
        "AssetName": "CapBridge Syndicate",
        "AveTradedPrice": 0.88,
        "LastPrice": 0.91,
        "VolumeHeld": 5000,
        "MarketValue": 4400,
        "ProfitLoss": 150,
        "ProfitLossPercent": 1.03
      }
    ]
  };
  res.status(200).json(response);
};

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
        "Key": "1",
        "Value": "Open"
      },
      {
        "Key": "2",
        "Value": "Matched"
      },
      {
        "Key": "3",
        "Value": "Cancelled"
      },
      {
        "Key": "4",
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