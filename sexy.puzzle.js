'use strict';

level_data = ["U2FsdGVkX18gR9RaaATnW/YgsFjK7M0IE3NdDcM/RKS6PGnnDlJ5TuJszHtaTzbXGG14VfV9RoDGhdU8YYTOlI/B5MEQ5Tq660tHMQWhIL9AqYuXeHP6b95SfY/vPH6r",
    "U2FsdGVkX1/SmYwccFu5/jSouuYpZSODPe4NF5mC+s8DBIfd1qhOOzcP12JK4l1/PyIEmW74p7jY/2sg4WrngQ==",
    "U2FsdGVkX19jCng3aTWnemUyDAJ1H3uQOBmXwI2IIViIby7ABe5jJpAaXXlrC8lz9GzMkdmhIkr9DkUZ/XklCQ==",
    "U2FsdGVkX1/OBZTaARcL4z4sINf+5/Y+kV4ARM9dSZHrLb7wOAlpzyp4h7322GzPbJ4THsIA2qIpspWRNhJ2f6LmgZVGgi4ZfBZwCg2OO20=",
    "U2FsdGVkX1/6kOQTCixCf4N05MiY92k8CtNeelruLiKsTLObRHrvanqyzilFasl/1pTGYacr+VVj2EA9x7BK/Q==",
    "U2FsdGVkX1+r1za/oy4J2u85xdN/2oYlqsmtTeyaaHJTREa6vKOL/3CutLet1Gf20koTHHtsCbzvFRmyn0YTwIEay6o7QFXLS0Uo5hUH8gY=",
    "U2FsdGVkX1/hCslMmzBVuivAZqsEL897UNPz0APaXByrki3xs0swdKUFMAaQ6wuEQ4uTXp8gB8TD3PnvoRMYMe19oDWPypS72pWLCDpnVnQqp1Q/kHDRiGikDG/LksgtpqzVYAuNeOaR7rVlA0NtcQ==",
    "U2FsdGVkX18MiTrXA5BCi2Kgi9nyhq452cpnhZfSAepBJUw2PAYoLqacDibSFggx",
    "U2FsdGVkX1/rU5w00KR23SdPtELI0hP4ng1JodWdSAG8ejp1cz4DZwFA/VCg5sW4uM1yBY4BWypfs4Yb5EuG4IlEtsfuiKwV0To1TNgT4sQ=",
    "U2FsdGVkX1+/NWjC4Cxan5Tmj+Dlcu8XHIRZcCIhKipSVdHHB6KEzZuR+7CILe97i8m5mPE92iDU2ZrEVFGBJ/2IBMa6tSASviyWEOvawao=",
    "U2FsdGVkX1+PgtZPc4iJhdHQCnui/3g3WnFSBKcOUiNdza2dP01DClefmkTtYf2C2T+o0+IR6Ds2DLZED3ZCmMFGCqpMzAUCie3miNlqnio+3XE2jJwjeXgXM5aSK56Y",
    "U2FsdGVkX1/767BxoMI77J6wAcFNXjqgOBQ+Y0Ys03IJPJZ6kJG610t2kWyLZaLLK88PCGbJa7TKlaET1ZJA0dE972SXNfaflrE818tET2vtD27DNs79LZOcYx8loQl+",
    "U2FsdGVkX19kqrdU6UaTQQKQcIYOC2nppO1tW261dlqgz9EWAxMkxCPkT7Xt2nbSNQEitH/fb53Orv/n6/1DpppNPIydUsLJlT5d1dbyFn9UcZr5hBV5VEwcnfm2aLYrX7LYUm9xnR+7M7JCOxsOV8Rov1RpPI5UyMxtELPerb1YssczAPY48lEqiAvVOMj+",
    "U2FsdGVkX197xV0TTNMv3EQ48C8Q7uawILoHerFtJdV7h32T1HJyOdwTohfJNidBzVqbrsztU0W9mUJDqFM1o6dNhDbTLsljWrC1vodHkPCDiiHg46J1FznFQq8Y4sdQzS9YJdgYym2zRkUYtckdqYiPGXY+L4m31yW6KS5OuXr3Gkb/iFO1msufsRApE0HHYUH/4uAo8HZv6ALr5j3NZQ==",
    "U2FsdGVkX1/Wt5W9YcTVhEidhg2Og/ocioczKc4EL2ay4sCM3WsZ9P3H8NMD1qTOf1t73qh3TegmWOu054LMzZixGuU+4pH5XKIsmfBd7HGH+Cm28Vj4erg+d9lBDZFNJEjdp/orON+QdMXF+Z15UjEw/Je7WdR46IOnBRDnTiGG9voFrC6KLpTOyCWWjmkU",
    "U2FsdGVkX1/VSieb/LHnBaos+KI5U90Nwluo5mqydA26o5g66PVuZZaHduPKHXQ9cEPvWwuZy0y9EE/MKKeObQ==",
    "U2FsdGVkX180u6dkD99qVQxLxSWODhZHoRNnpEznKIz5bFKCjWs6a7vWX3pi2o7LP6StF/X+HUwRQqrbXY6xDANDobb1DMo7bjPj/0C9GPQ=",
    "U2FsdGVkX1/aVMtKzHU9VeZxQQb9uiufstLoEQzBfAWwwUYbaYVx+bMj2TewFCaMIkYKLLD5WQn07HGtA1N4pQ==",
    "U2FsdGVkX18UVmqKeTR1M3gp6e/r5WM+gQygRRzttXYxP11u1LZGIOnJJ8IyTpUA4Mi/bZo+RFfMkvRX2Rcjy3geuOZgK+Zvqu4rtVcvzKlJgCcXsUZfqdIzWznPJCy0",
    "U2FsdGVkX19R8P4E9nixwNpd1pbV2DkvPMaJxfh1BvyYysx3CdTdUv48OXIDamlwN3rtLVkgF6D8mB47Rv7g0jnfhsqkaoZsNj0krQH5zwF90zdWWjN52wJRZOyJa/VU",
    "U2FsdGVkX1/OGncK7vrXXxghh3ud66U4r+wrUwu535DOKV+Yv6ZoiFAIYvqGnjcx1Mlms9UXTPEmfeV8l9i+YLUCc2LAKiKabGmp0ZN4FMivE1QQ70rjyIqmzU6VdG418jceJc6eCN1cKsP2FrxT3xIr9joGopDSHwKef68wSKU=",
    "U2FsdGVkX19EHwkdARGGY+tB/aegQ0GdInECC1DPO4G/w1oHHzgLNroIh7v/rgbBfV1skB+AXQeoL9JYnBah31vvb6YVtaheQqnUvUWvWGlwdm9Nwb/bPY6FYvi9iEgsL97nOLhu12AOvebzARYZCu9yg0BKaQdPdv18Hra0GAUKUNqUROh+LPyZImKj8O/uostxS/6jqZK7p/VX7ZC2deq8lXrh96+WmlJwIuhjBYM=",
    "U2FsdGVkX18uDNO/EXOVJVl+Og95zZxwXTivlmszxVjUD4WspmQhrdkefmAWNlfL1jdPWCfrSYrAMQ2jSbrGF7xVpYz7YG6d+lkjQkqbKchv1nK4Yob6a2Qkbh0Jq89p", "U2FsdGVkX1/+FXOf79IwWdXSBoFHTDlRpKo1uv8labOe5nmmsP4huRw8+ZFp8RV6QsiyQgxBRX9DCb0OXGCdhyvn/YINaO74YraVHSjxf4evZF5GX60YpwpHQVeCAv/bbXrqmIY/VwwgZbFFV6g8pMjVzN1roF0yZ5DDh5wjxow6JzXgnaSMLaHzp7V6KDouh1kuSRH1rvw5I+tnoeb0S22kpoSH75ORbn3ptL+WR8FGO/aFruDtAHFhJISAg1UP",
    "U2FsdGVkX1++IiW6QJY0kKDTRQnRlRz0N9WekM0Ojv1jvjky8bphm+Aiz6HCWyyixjiBf361ySpNFar6IqSOaiMeFUvm+xb/Kf9YJkzXDNQ8/QbzJwoOqs0aOXXiwnhxGH16u1Nw4NyBkMWJVbFKBxCXsgOwfC645Rk0V1VTlIc=", "U2FsdGVkX1/4w6RYR44FvmcTLHri3yleCy6Q7QNHlo3o1VPtF2AyMkzKKveRoJSxKaAGt+nsIUiabyxGZ8F4zyP0YeK/lOBk1ygDnAKi5ht/+2133f8uv9ZAuWeSMEyWanjuVXDIQ9m0o3DvbDngUA==", "U2FsdGVkX1/XdJejX4flGFK62fEHS6Dy283zZLb8v+cniqblsJJHHho+6BYgHW2eIEm3Az3hr3mO8sNztTx7Rr4mASxqTb7b67KMnxEXnOSqtKEt9KP07yAZvZB/yxsvqj4O1i7jNs414URIxbbpNKJaaOtGevfob8l1r9+smQU=",
    "U2FsdGVkX18xSMxh9zjlBIFOsQyps01Vd0ZSQA2VGCaEYxpdhqWytg4623QGJWqe",
    "U2FsdGVkX1+XnqHunefLzk49rw+629EmOEKWrDQ7lM/uaiIAaew6gS2Dm88h87DhiKz7EBm3jBAvIYoMS6u64tFpsOHi/E0SF1VrqRwC7o7pMRYLXnMY76w2rA5k7aBqqmyxLdn9+cJ+A0gUfyexK/JipnUl1pXJwoCwHb2+uJ86mW0FRS9NSGJ6Jv73G7Yy",
    "U2FsdGVkX18s+NLWTgFMvfltk2j6cvxDP86MfCQoXz5mkEJH0tb6//yDrUc+sM/3yExutxlxOwaxa1IrnR5UD9st3DuucuTUtH/TpTgODFtMSv8lcXwLtIm03fkqsvQIqyXmsmu897SsuRpLkHj+Sw==",
    "U2FsdGVkX1/WzUB0b4va3h4suNmx6gcy8tcyCQ4BmKfQNAZao2QkaZ5nz2+Nx3vyhepaxf5IMLFaXyXzXT879dIEJDjpeHdtKBgmbeeYYZs=",
    "U2FsdGVkX18q0slp8Ownh1DbRDs/ibtsdIwAVnyBqC1Ho7MXd93mWzdY+xZng2p6BM78EQ1i3YAx4e/k9JkEsj8MLa4VMMXvCfnmrp+C9kwbbJjyCv4i8kKaGIwVwXhQWrOPjVSWdrbWG7/T0R7ULw==",
    "U2FsdGVkX18ZL5f97nq9EXboRwiSYNUGaC/+nWNqjWuD7EnxvfwKSEiCwxKioHdSZZJJBArKEfdEk9fVbxnFYx5zKXoa2mqR1rdSljOTPlUgZPgYM4mmyQF1pSH2/a8SwlwGbxvTyDNpVuP1ouuwsw==",
    "U2FsdGVkX1/bWXG119nd5PLDdPGspLczYUumjH6FAtjAmM4zj8G1SVcxG6X21QUbWg+UnbaCChGmSvzdKg874hUS5MEw6fiWXLJuSdeTdOgZKi+MM35UVLOgHsa4x5WRpB5m7KpSDGelhPcbN8o8zQ==",
    "U2FsdGVkX19RloKoTdaUE6pNsgCGjwO1XaojJqOGa4mEyqjDUWPHhEWK1agzqXttB/a/uE0KgQWjTw0bK1vPJh8RYt1Jyk5luNOn8+1wyC7xx45La40bsFaa4l96tO/Jmr83YBMwVfXOFg3wCH+IZrpC+gcnEDM7A9J2TmxIrmM74dnO2zMDNk+4Gcp0WtuR",
    "U2FsdGVkX18MZrV/TT40nohZDP4rWR1d7K6v38waMNtheudPaeLXhFKb0RvNuCqIahJkfyH5XmPAM0Pv8+VsIauZXd+XJB66JJuyh7aLqAaPNsT69RYUhkHr61iJoltlx5qs6lj7AcFzqKeJ/wFM8/4mEM1PjthAxInqO4qOagYbxiF8A++D3GTNtgR0hIkobCK5TnSNiU9C+zziJyv0wajq0aUr8rKKszYhcPpnNRCNLPh5QGSeZq2ji1nKEKdNn/kIKDwcyB9z2yKSCl1wVTgty22ZWVruhwr9wqbLpgCuiqP47aRwxOnWDt8h6pP8G3zTzjJDDbASr6dLkJhUHhigmkcttpkHTkjv+ccTA4o+6HHXH6ppcUzjj3cVXiKMiQp2J46fviQN2YV4LlNy6Q==",
    "U2FsdGVkX18oDdsw2NYEXk7vshWTdHYd6sQnofbRKI50tqYE+YXKPEFvL4ircZRivY+JuVN1a0ScLqzH4hG1HCzYFuvJ/xbzuxGxn2YDdTey9akwNIIMWd4mE9IE25c6tFvRF9n1diqBanMVUpdjjg==",
    "U2FsdGVkX1+6+CYzYjddYrD7/1eP+zuxgQ5dIMDCgjytaw/IcCq1Z+i1ZnZZ06zUL1+s7ZyUTXT2j/KhxQoKnBtKd+l8l94yh8l2FiwEREc5sLKGYrCjIHH6PVd6RKWP",
    "U2FsdGVkX19xEoK+nMG0m/PKAmHaUa6i5xXPrIRHDmTfYuB5PlTm25ch8fROikRuA4e2npmrHZkJQPUC5vQnh4IsDHF4lXBYJQ4vnE4eu3g=",
    "U2FsdGVkX19ACY1TJP4M7IVsrPGa7u1S3iFqfriPA33wu4x7DIah4ofOL0I41uQ+wVvrIcR0moS74pXikrEgGUwayARGEXjUCVJnCWEA8uk="];
