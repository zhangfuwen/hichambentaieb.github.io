DEBUG=JEKYLL_GITHUB_TOKEN=blank PAGES_API_URL=http://0.0.0.0

default:
	@bundle install

update:
	@bundle update

clean:
	@bundle exec jekyll clean


theme: clean
	@gem uninstall jekyll-rtd-theme
	@gem build *.gemspec && gem install *.gem

site:
	@${DEBUG} bundle exec jekyll build --safe --profile

server:
	@${DEBUG} bundle exec jekyll server --safe --livereload
