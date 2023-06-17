%% Web Access using Data Import and Export API
% This is not possible with the webread/webwrite API

%% HTTP Interface
import matlab.net.*
import matlab.net.http.*
import matlab.net.http.io.*

header = HeaderField('Authorization', 'Bearer ACCESS_TOKEN');
uri = URI('http://localhost:28139/api/2.0/files/content');
body = MultipartFormProvider(...
    'attributes', JSONProvider(struct(...
        'name', 'tigers.jpeg',...
        'parent', struct(...
            'id', '11446498'...
        )...
    )),...
    'file', ImageProvider('myfile.jpg')...
);
response = RequestMessage('post', header, body).send(uri.EncodedURI);
