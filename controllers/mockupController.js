"use strict";

exports.list_my_orders = (req, res, next) => {
  const response = {
    "count": 1,
    "myorders": [
      {
        "OrderNo": "00001",
        "Company": "CapBridge Syndicate",
        "OrderedOn": "2018-01-29T17:00:00.000Z",
        "ExpiresOn": "2018-01-29T17:00:00.000Z",
        "Price": 4,
        "Amount": 25,
        "Value": 100,
        "Currency": "USD",
        "Status": "Open"
      }
    ]
  };
  res.status(200).json(response);
};

exports.list_my_trades = (req, res, next) => {
  const response = {
    "count": 1,
    "mytrades": [
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
    "myassets": [
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
    "tradingboards": [
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
    "tradinghistories": [
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
    "orderstatus": [
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
    "tradestatus": [
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
    "count": 8,
    "tradestatus": [
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