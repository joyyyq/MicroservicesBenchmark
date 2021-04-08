FROM envoyproxy/envoy:v1.14.3
COPY ./envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
EXPOSE 8081
EXPOSE 9901

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml