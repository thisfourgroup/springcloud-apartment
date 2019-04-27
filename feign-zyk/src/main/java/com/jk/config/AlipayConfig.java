package com.jk.config;

import java.io.FileWriter;
import java.io.IOException;

/**
 * @author Mr.Zhang
 * @title: AlipayConfig
 * @projectName apartment
 * @description: TODO
 * @date 2019/4/24  20:21
 */

public class AlipayConfig {

    // 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号

    public static String app_id = "2016100100638250";


    // 商户私钥，您的PKCS8格式RSA2私钥

    public static String merchant_private_key = "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDSZILauc1dQt0yMqYKq7A82TPF+5dCZQSee6i6DdiV11ySwLTzGNLidZZt2aWG+K6Gh4Bt85kNoMmoDiBpfnC713bOF+wl91C9Mw5EI0P3A12GpWBz/qwpR5nGrHkJzZITguVf/WsBKL48HI7h0mVGjsk+JDy4B8RoVkShwJL4o5qir/2uIHPIx3zSPU/BNhMEB0t/3bUSFv+Gi+UPIcaSuz4yBoXT+9ZoWbmH7riseaQBMUk84G/NgHW+c/7anz1B7JGWSKdHqBrRIClkudGBgCnINGrXU5+BLoBt/BZkZ5R8AWasGrnH0JqBo9Dicfqr7/QReb7DPgYtKVZq156vAgMBAAECggEBALbwMJuxPXFfR2hzg875dHekQRFgbyiLH9YSHicRDQdVSKhOKcjLB+tjZVbFDdnreA1/2ttAGhAwg8e96M7x42Jhumr/gBWPE0RAFaKHq3woD/WY7OJPSjFmkb6fj2tHtUGD6qBpgNZ0L92i01ZmFCui0jdXWPiHwG8cu/aNtP296EE1nYuJrsud5cfujJO4NSHrLOov3zpOiGf+nO9svw67bAzq0bxMnSA1B5D3M7N8Wkb5oo45wObJ5iSCKV2zyuAR9OW0GzZ+sur+AMxqhIHv8kv/C4KrdDY6XRPQT7sLwy01jyJZoDz0QPDzhvGoMvs73o9+jLM9T9vbGq50zPkCgYEA8PiVBgU3fgwCZnYRoNcJKkLVF19BxVUHvnI3PycHOevoJPzSs8HhckQiuoXMXrPdNHQqdLZJr/+FLrNiiH9gHTl+zMd76expAcLVmvRSBFS5cNjYcjbMlsohBTkGhomCxVps1rk0N/Um1REvAfYDifUNfTzs2Yt9tIJffa0aOa0CgYEA34O0bePvTBWr60h4TbPIRDJ2PMhaKUbI0/cjjioCQJaopETT3mbfkM5JrTTAT4J8xjizNedirDKCVUluNEc21qna9iGqsAUvjoijTOgKm1RezYvjA+imFzINYY3t/ohwGGS+OAhjgXu95vcYoQYWQFxSotc9pyNbC9GCOxBkvUsCgYEAvin+ONUPGOrTThapDLwGYJKDZcFnvxm+Vb3++ViMbFpORjo68V700l8Q5Q/H24in7cgq5RYiCsFkUhmAjeWvbQC9n09h65YEvD4Mog9jVkWiXnrSPTgftnPnIR8CllOYnrQgpkdb/Tj7HzRDW5HQ8yMvNQFKjNd3KWelgiGES7UCgYA1DcoSG3x9jtdT7cvAheAPb/roypW8HnUk+xCReh82vYwiEcRIkhqXAKA0YMUVGmALnQHM1bNyNDsDi36BIjY+FetHaQ5e4Zw8NOquIpYB8LDgEUg9cUebUeIjOdE4DaKt55vPKQ6VeY3F+Pj7n7pAZKmoxXZ46cd+sqg65NVEqQKBgQDcPTenXxZuGFsyQHUltK6Z6rHzl3UkyZufjbl0uWywcecY+fAs+IvLTw3GMcG468wuuqPyOuj9+rxfQeAd8SgKLrhepUKBZXA+u9itEcq0R0paervJsf2VnUikfqPXfE87TCpP3mPHMNodkcttYptYjut6MU8iEf+j4tu/wLnB8w==";

    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。

    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAylxXs2lMjdAVU4mrEnHH5Pl1+JUtP1H7R9GpwT25GHdPDLcaFaBpPCarMqT6ho/SUqdbIJ3IM/q+FeOA5EzA67zXleCi/ltyCPLNZdOYOATN4plAsdhA89NXm0k944p49o28Hqkye4bMD1x3SjggCKZkwxs/ymN7qucbZxL3x46QY2bCRWtE4kAq7pGTKMy7iTUE/rLqKIuX/YktsLqoKQ4IIab9ClnRgwM/qA2tWOXgKbL6NRThx/Y4eg0EVcyvOcE8BXyII59qguVEbMu+yXFoBZ2K9fSec1Pu/Rc30HjcELqlEuq+g+CjaWFYY0m3LwvE59jttxoswJiOWjYpEQIDAQAB";

    // 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问

    public static String notify_url = "";


    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问

    public static String return_url = "";


    // 签名方式

    public static String sign_type = "RSA2";


    // 字符编码格式

    public static String charset = "utf-8";


    // 支付宝网关

    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";


    // 支付宝网关

    public static String log_path = "E:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


    /**
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     *
     * @param sWord 要写入日志里的文本内容
     */

    public static void logResult(String sWord) {

        FileWriter writer = null;

        try {

            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis() + ".txt");

            writer.write(sWord);

        } catch (Exception e) {

            e.printStackTrace();

        } finally {

            if (writer != null) {

                try {

                    writer.close();

                } catch (IOException e) {

                    e.printStackTrace();

                }

            }

        }

    }

}
